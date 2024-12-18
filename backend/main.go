package main

import (
	"github.com/k0rean-rand0m/raiders-monorepo/backend/helpers"
	"github.com/k0rean-rand0m/raiders-monorepo/backend/postgres"
	"github.com/k0rean-rand0m/raiders-monorepo/backend/server"
	log "github.com/sirupsen/logrus"
	"os"
)

func main() {
	helpers.LoadEnv()
	helpers.SetupLogger()

	log.Debug()
	postgres.Connect(os.Getenv("DATABASE_URL"))

	server.Run()
}
