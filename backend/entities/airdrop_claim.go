package entities

import (
	"errors"
	"github.com/jackc/pgx/v4"
	db "github.com/k0rean-rand0m/raiders-monorepo/backend/postgres"
	"github.com/k0rean-rand0m/raiders-monorepo/backend/postgres/queries"
)

type AirdropClaim struct {
	UserTgID  int64 `json:"user_tg_id"` // Corresponds to "user_tg_id" column
	AirdropID int64 `json:"airdrop_id"` // Corresponds to "airdrop_id" column
	Amount    int64 `json:"amount"`
}

var amounts = [3]int64{75, 50, 100}

func (ac *AirdropClaim) Create(chosen int64) (err error) {
	if chosen > 2 {
		return errors.New("invalid chosen id")
	}
	err = db.QueryRow(
		queries.AirdropClaim,
		ac.UserTgID,
		ac.AirdropID,
		amounts[chosen],
	).Scan(&ac.Amount)

	if err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			return errors.New("already claimed")
		}
		return err
	}

	return
}

func (ac *AirdropClaim) Exists() (exists bool, err error) {
	res := db.QueryRow(queries.IsAirdropClaimed, ac.UserTgID, ac.AirdropID)
	err = res.Scan(&exists)
	return
}
