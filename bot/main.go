package main

import (
	"context"
	"encoding/json"
	"github.com/joho/godotenv"
	"github.com/k0rean-rand0m/raiders-monorepo/bot/postgres"
	"github.com/k0rean-rand0m/raiders-monorepo/bot/postgres/queries"
	"log"
	"os"
	"os/signal"

	"github.com/go-telegram/bot"
	"github.com/go-telegram/bot/models"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Println(err)
	}

	postgres.Connect(os.Getenv("POSTGRES"))

	ctx, cancel := signal.NotifyContext(context.Background(), os.Interrupt)
	defer cancel()

	opts := []bot.Option{
		bot.WithMiddlewares(
			MessageExists,
		),
		bot.WithMessageTextHandler("/start", bot.MatchTypeExact, startHandler),
		bot.WithDefaultHandler(fallbackHandler),
	}

	b, err := bot.New(os.Getenv("BOT_TOKEN"), opts...)
	if err != nil {
		panic(err)
	}

	b.Start(ctx)
}

func MessageExists(next bot.HandlerFunc) bot.HandlerFunc {
	return func(ctx context.Context, b *bot.Bot, update *models.Update) {
		if update.Message != nil {
			next(ctx, b, update)
		}
	}
}

func fallbackHandler(ctx context.Context, b *bot.Bot, update *models.Update) {
	if update.Message.Chat.ID <= 0 {
		return
	}
	if update.Message.From.ID == 231031476 {
		data, _ := json.Marshal(update.Message)
		b.SendMessage(ctx, &bot.SendMessageParams{
			ChatID: update.Message.Chat.ID,
			Text:   string(data),
			Entities: []models.MessageEntity{
				{
					Type:   "expandable_blockquote",
					Offset: 0,
					Length: len(data),
				},
			},
		})
		return
	}
	startHandler(ctx, b, update)
}

func startHandler(ctx context.Context, b *bot.Bot, update *models.Update) {
	b.SendMessage(ctx, &bot.SendMessageParams{
		ChatID: update.Message.Chat.ID,
		Text:   "Launch Your Console Here!\nt.me/raider_console_bot/launch",
	})
	go createUser(update.Message)
}

func createUser(message *models.Message) {
	_, err := postgres.Execute(
		queries.UserCreate,
		message.From.ID,
		message.From.Username,
		message.From.IsPremium,
		message.Chat.ID,
	)
	if err != nil {
		log.Println(err)
	}
}
