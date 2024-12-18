package http

import (
	"net/http"
)

func UserDemo(w http.ResponseWriter, r *http.Request) {

	//// Trade data
	//var trade = binary.Trade{}
	//err := json.NewDecoder(r.Body).Decode(&trade)
	//if err != nil {
	//	log.Error(err)
	//}
	//
	//// Running worker
	//// TODO hardcoded autoClose
	//err = trade.Process(60)
	//if err != nil {
	//	w.WriteHeader(500)
	//	w.Write([]byte(err.Error()))
	//	return
	//}
	//
	//trade.Mu.Lock()
	//resp, err := json.Marshal(&trade)
	//trade.Mu.Unlock()
	//if err != nil {
	//	w.WriteHeader(500)
	//	w.Write([]byte(err.Error()))
	//	return
	//}
	//
	//_, err = w.Write(resp)
	//if err != nil {
	//	w.WriteHeader(500)
	//	w.Write([]byte(err.Error()))
	//	return
	//}
}
