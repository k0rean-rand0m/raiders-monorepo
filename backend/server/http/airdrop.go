package http

import (
	"encoding/json"
	"github.com/gorilla/mux"
	e "github.com/k0rean-rand0m/raiders-monorepo/backend/entities"
	"github.com/k0rean-rand0m/raiders-monorepo/backend/helpers"
	"github.com/k0rean-rand0m/raiders-monorepo/backend/server/middlewares"
	log "github.com/sirupsen/logrus"
	initdata "github.com/telegram-mini-apps/init-data-golang"
	"net/http"
	"strconv"
)

func AirdropStatus(w http.ResponseWriter, r *http.Request) {
	initData, ok := r.Context().Value(middlewares.InitDataContextKey).(initdata.InitData)
	if !ok {
		http.Error(w, "init data was not provided to handler", http.StatusInternalServerError)
		return
	}
	airdropId, err := strconv.ParseInt(mux.Vars(r)["id"], 10, 64)
	if err != nil {
		log.Error(err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	ac := e.AirdropClaim{
		UserTgID:  initData.User.ID,
		AirdropID: airdropId,
	}

	status, err := ac.Eligible()
	if err != nil {
		log.Error("Airdrop eligible: ", err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	helpers.HttpResponse(w, struct {
		Status string `json:"status"`
	}{status})
}

func AirdropClaim(w http.ResponseWriter, r *http.Request) {
	initData, ok := r.Context().Value(middlewares.InitDataContextKey).(initdata.InitData)
	if !ok {
		http.Error(w, "init data was not provided to handler", http.StatusInternalServerError)
		return
	}
	airdropId, err := strconv.ParseInt(mux.Vars(r)["id"], 10, 64)
	if err != nil {
		log.Error(err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	ac := e.AirdropClaim{
		UserTgID:  initData.User.ID,
		AirdropID: airdropId,
		Amount:    500,
	}

	body := struct {
		Code string `json:"code"`
	}{}
	err = json.NewDecoder(r.Body).Decode(&body)
	if err != nil {
		log.Error(err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	err = ac.Create(body.Code)
	if err != nil {
		log.Error(err)
		helpers.HttpResponse(w, struct {
			Success bool   `json:"success"`
			Details string `json:"details"`
		}{false, err.Error()})
		return
	}

	helpers.HttpResponse(w, struct {
		Success bool   `json:"success"`
		Details string `json:"details"`
	}{true, ""})
}
