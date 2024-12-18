package helpers

import (
	log "github.com/sirupsen/logrus"
	"os"
	"time"
)

func SetupLogger() {
	if os.Getenv("DEV") != "" {
		log.SetLevel(log.DebugLevel)
	} else {
		log.SetLevel(log.InfoLevel)
	}
	log.SetFormatter(&log.TextFormatter{
		FullTimestamp:   true,
		TimestampFormat: time.DateTime,
	})
}
