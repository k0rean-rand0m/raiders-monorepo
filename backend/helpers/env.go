package helpers

import (
	"github.com/joho/godotenv"
	log "github.com/sirupsen/logrus"
)

func LoadEnv() {
	err := godotenv.Load()
	if err != nil {
		log.Error(err)
	}
}
