package postgres

import (
	"context"
	"github.com/jackc/pgconn"
	"github.com/jackc/pgx/v4"
	"github.com/jackc/pgx/v4/pgxpool"
	log "github.com/sirupsen/logrus"
)

type DbInterface interface {
	Connect(connectionString string)
	QueryRow(query string, args ...interface{}) pgx.Row
	QueryRows(query string, args ...interface{}) (rows pgx.Rows, err error)
	Execute(query string, args ...interface{}) (tag pgconn.CommandTag, err error)
}

type db struct {
	pool *pgxpool.Pool
}

var Instance = &db{}

func Connect(connectionString string) {
	log.Info("connecting to Postgres")
	connection, err := pgxpool.Connect(
		context.Background(),
		connectionString,
	)
	if err != nil {
		log.Error(err)
		panic(err)
	} else {
		Instance.pool = connection
		log.Info("connected to Postgres")
	}
}

func QueryRows(query string, args ...interface{}) (rows pgx.Rows, err error) {
	rows, err = Instance.pool.Query(context.Background(), query, args...)
	return
}

func QueryRow(query string, args ...interface{}) pgx.Row {
	// defer SentryRecover()
	return Instance.pool.QueryRow(context.Background(), query, args...)
}

func Execute(query string, args ...interface{}) (tag pgconn.CommandTag, err error) {
	// defer SentryRecover()
	tag, err = Instance.pool.Exec(context.Background(), query, args...)
	return
}
