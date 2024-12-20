package middlewares

import (
	"context"
	log "github.com/sirupsen/logrus"
	initdata "github.com/telegram-mini-apps/init-data-golang"
	"net/http"
	"os"
	"time"
)

type contextKey string

const InitDataContextKey contextKey = "initData"

func InitData(next http.Handler) http.Handler {
	token := os.Getenv("BOT_TOKEN")
	expire := 0 * time.Hour

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		initDataHeader := r.Header.Get("X-Telegram-Init-Data")

		err := initdata.Validate(initDataHeader, token, expire)
		if err != nil {
			log.Error(err)
			http.Error(w, err.Error(), http.StatusForbidden)
			return
		}

		initData, err := initdata.Parse(initDataHeader)
		if err != nil {
			log.Error(err)
			http.Error(w, "bad request: init data validated but can not be parsed", http.StatusInternalServerError)
			return
		}

		enrichedContext := context.WithValue(r.Context(), InitDataContextKey, initData)

		next.ServeHTTP(w, r.WithContext(enrichedContext))
	})
}
