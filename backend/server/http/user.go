package http

import (
	e "github.com/k0rean-rand0m/raiders-monorepo/backend/entities"
	"github.com/k0rean-rand0m/raiders-monorepo/backend/helpers"
	"github.com/k0rean-rand0m/raiders-monorepo/backend/server/middlewares"
	log "github.com/sirupsen/logrus"
	initdata "github.com/telegram-mini-apps/init-data-golang"
	"net/http"
)

func User(w http.ResponseWriter, r *http.Request) {
	initData, ok := r.Context().Value(middlewares.InitDataContextKey).(initdata.InitData)
	if !ok {
		http.Error(w, "init data was not provided to handler", http.StatusInternalServerError)
		return
	}

	var err error
	var errCode = http.StatusInternalServerError // error code to return in case of error
	var user = &e.User{
		TgId:      initData.User.ID,
		Username:  helpers.StringPtr(initData.User.Username),
		IsPremium: initData.User.IsPremium,
		PhotoUrl:  helpers.StringPtr(initData.User.PhotoURL),
	}

	switch r.Method {
	case http.MethodPost:
		err = user.Create()
	case http.MethodGet:
		user, err = e.UserGet(user.TgId)
		errCode = http.StatusNotFound // Overwrite to 404
	}

	if err != nil {
		log.Error(err)
		http.Error(w, err.Error(), errCode)
		return
	}

	helpers.HttpResponse(w, user)
}
