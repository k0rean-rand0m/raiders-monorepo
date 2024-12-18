package http

import (
	"github.com/gorilla/mux"
	e "github.com/k0rean-rand0m/raiders-monorepo/backend/entities"
	"github.com/k0rean-rand0m/raiders-monorepo/backend/helpers"
	"github.com/k0rean-rand0m/raiders-monorepo/backend/server/middlewares"
	initdata "github.com/telegram-mini-apps/init-data-golang"
	"net/http"
	"strconv"
)

func AirdropClaim(w http.ResponseWriter, r *http.Request) {
	var err error
	var errCode = http.StatusInternalServerError
	var resp any

	initData, ok := r.Context().Value(middlewares.InitDataContextKey).(initdata.InitData)
	if !ok {
		http.Error(w, "init data was not provided to handler", errCode)
		return
	}

	airdropId, err := strconv.ParseInt(mux.Vars(r)["id"], 10, 64)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	airdropClaim := &e.AirdropClaim{
		UserTgID:  initData.User.ID,
		AirdropID: airdropId,
	}

	switch r.Method {
	case http.MethodPost:
		var airdropChosen int64
		airdropChosen, err = strconv.ParseInt(r.URL.Query().Get("chosen"), 10, 64)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
		err = airdropClaim.Create(airdropChosen)
		resp = struct {
			Amount int64 `json:"amount"`
		}{airdropClaim.Amount}
	case http.MethodGet:
		var exists bool
		exists, err = airdropClaim.Exists()
		resp = struct {
			Exists bool `json:"exists"`
		}{exists}
	}

	if err != nil {
		http.Error(w, err.Error(), errCode)
		return
	}

	helpers.HttpResponse(w, resp)
}
