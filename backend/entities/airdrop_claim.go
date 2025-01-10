package entities

import (
	"errors"
	db "github.com/k0rean-rand0m/raiders-monorepo/backend/postgres"
	"github.com/k0rean-rand0m/raiders-monorepo/backend/postgres/queries"
	log "github.com/sirupsen/logrus"
)

type AirdropClaim struct {
	UserTgID  int64 `json:"user_tg_id"` // Corresponds to "user_tg_id" column
	AirdropID int64 `json:"airdrop_id"` // Corresponds to "airdrop_id" column
	Amount    int64 `json:"amount"`
}

func (ac *AirdropClaim) Create(code string) (err error) {
	if code != "F1ND1T" {
		return errors.New("wrong code")
	}

	var success bool
	err = db.QueryRow(queries.AirdropClaim, ac.UserTgID, ac.AirdropID, ac.Amount).Scan(&success)
	if err != nil {
		log.Error("Airdrop claim: ", err)
		return err
	}

	return
}

func (ac *AirdropClaim) Eligible() (status string, err error) {
	err = db.QueryRow(queries.AirdropClaimEligible, ac.UserTgID, ac.AirdropID).Scan(&status)
	return
}
