package helpers

import (
	"encoding/json"
	log "github.com/sirupsen/logrus"
	"net/http"
)

func HttpResponse(w http.ResponseWriter, data any) {
	resp, err := json.Marshal(data)
	if err != nil {
		log.Error(err)
		http.Error(w, "failed to serialize JSON", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	_, _ = w.Write(resp)
}
