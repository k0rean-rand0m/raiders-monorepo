package server

import (
	"github.com/gorilla/mux"
	httpEndpoints "github.com/k0rean-rand0m/raiders-monorepo/backend/server/http"
	"github.com/k0rean-rand0m/raiders-monorepo/backend/server/middlewares"
	log "github.com/sirupsen/logrus"
	"net/http"
	"os"
)

func setupRoutes() {
	r := mux.NewRouter()
	r.Use(middlewares.EnableCORS)
	r.Use(middlewares.InitData)

	r.PathPrefix("/").Methods("OPTIONS").HandlerFunc(
		func(w http.ResponseWriter, r *http.Request) {
			w.WriteHeader(http.StatusOK)
		},
	)
	r.HandleFunc("/user", httpEndpoints.User).Methods("GET", "POST")
	r.HandleFunc("/airdrop/claim/{id}", httpEndpoints.AirdropClaim).Methods("GET", "POST")

	http.Handle("/", r)
}

func Run() {
	setupRoutes()
	addr := "80"
	if os.Getenv("PORT") != "" {
		addr = os.Getenv("PORT")
	}
	log.Info("Serving at " + addr)
	log.Fatal(
		http.ListenAndServe(":"+addr, nil),
	)
}
