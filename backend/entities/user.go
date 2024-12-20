package entities

import (
	"fmt"
	db "github.com/k0rean-rand0m/raiders-monorepo/backend/postgres"
	"github.com/k0rean-rand0m/raiders-monorepo/backend/postgres/queries"
	log "github.com/sirupsen/logrus"
)

type User struct {
	TgId      int64   `json:"tg_id"`
	Username  *string `json:"username"`
	IsPremium bool    `json:"is_premium"`
	PhotoUrl  *string `json:"photo_url"`
	Balance   int64   `json:"balance"`
}

func UserGet(tgId int64) (u *User, err error) {
	res := db.QueryRow(queries.UserGetByTgId, tgId)

	u = &User{}
	err = res.Scan(&u.TgId, &u.Username, &u.IsPremium, &u.PhotoUrl, &u.Balance)
	if err != nil {
		log.Error("User get: ", err)
		return nil, fmt.Errorf("user not found: %d", tgId)
	}
	return
}

func (u *User) Create() error {
	_, err := db.Execute(queries.UserCreate, u.TgId, u.Username, u.IsPremium, u.PhotoUrl)
	if err != nil {
		log.Error("User create: ", err)
		return fmt.Errorf("error creating user: %w", err)
	}
	return nil
}
