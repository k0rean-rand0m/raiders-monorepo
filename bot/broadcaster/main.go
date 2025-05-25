package main

import (
	"context"
	"encoding/json"
	"github.com/go-telegram/bot"
	"github.com/go-telegram/bot/models"
	"github.com/jackc/pgx/v4"
	"github.com/joho/godotenv"
	"github.com/k0rean-rand0m/raiders-monorepo/bot/postgres"
	log "github.com/sirupsen/logrus"
	"os"
	"strconv"
	"time"
)

type UserData struct {
	Id int64 `json:"id"`
}

var Users []UserData

func Load() {
	file, err := os.Open("./broadcast.json")
	if err != nil {
		log.Fatalf("Failed to open file: %v", err)
	}
	defer file.Close()

	decoder := json.NewDecoder(file)
	err = decoder.Decode(&Users)
	if err != nil {
		log.Fatalf("Failed to parse JSON: %v", err)
	}

	log.Printf("Loaded %d users from DolphinDrop.json", len(Users))
}

func LoadPostgres(query string) (pgx.Rows, error) {
	postgres.Connect(os.Getenv("POSTGRES"))
	rows, err := postgres.QueryRows(query)
	if err != nil {
		return nil, err
	}
	return rows, nil
}

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Println(err)
	}

	b, err := bot.New(os.Getenv("BOT_TOKEN"), []bot.Option{}...)
	if err != nil {
		panic(err)
	}
	log.Info(b)

	// From file
	//Load()
	//for i := 0; i < len(Users); i++ {
	//	time.Sleep(40 * time.Millisecond)
	//	_, err = sendMessage(Users[i].Id, b)
	//	if err != nil {
	//		log.Error(Users[i].Id, " ", err.Error())
	//	} else {
	//		log.Info(Users[i].Id, " - success")
	//	}
	//}

	// From Postgres
	rows, err := LoadPostgres("select tg_id as id from users order by balance desc, id offset 4000")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	Report("Starting broadcast", b)
	i := 1
	s := 0
	for rows.Next() {
		var userId int64 = 0
		err := rows.Scan(&userId)
		if err != nil {
			log.Error(err)
		}
		time.Sleep(40 * time.Millisecond)
		_, err = sendMessage(userId, b)
		if err == nil {
			s++
		}
		if i%1000 == 0 {
			time.Sleep(40 * time.Millisecond)
			Report("Messages sent: "+strconv.Itoa(i), b)
		}
		i++
	}
	Report("Broadcast completed.\nMessages sent: "+strconv.Itoa(i-1)+"\nMessages delivered: "+strconv.Itoa(s), b)
}

var t = true
var messagePreset = &bot.SendPhotoParams{
	Photo: &models.InputFileString{
		Data: "AgACAgIAAxkBAAEC7TxoFihg_BTdYkqcfkpagBopwiQc8QACuPcxG3gHsEisVyDlJGuv3wEAAwIAA3kAAzYE",
	},
	Caption: "Hey Raider, the moment is now.\n\nWe just launched a secret quest - made only for those who showed up early.\nThat means you.\n\nYour mission:\nPlay. Survive. Hunt points.\n\nThis isn't public. It's a hidden path for a select few.\nA test of instinct, speed, and strategy.\n\nOnly a handful will finish it. Fewer will master it.\nYour window is open. Use it.\n\nGood luck, Raider. You'll need it.\n\nPlay our first game!\n👉 @raidx_game_bot",
	CaptionEntities: []models.MessageEntity{
		{Type: "bold", Offset: 0, Length: 30},
		{Type: "bold", Offset: 51, Length: 12},
		{Type: "bold", Offset: 118, Length: 4},
		{Type: "bold", Offset: 138, Length: 27},
		{Type: "bold", Offset: 318, Length: 28},
		{Type: "bold", Offset: 384, Length: 20},
	},
	ReplyMarkup: models.InlineKeyboardMarkup{
		InlineKeyboard: [][]models.InlineKeyboardButton{
			{
				{
					Text: "Play the game",
					URL:  "https://t.me/raidx_game_bot",
				},
			},
		},
	},
}

func sendMessage(chatID int64, b *bot.Bot) (*models.Message, error) {
	message := *messagePreset
	message.ChatID = chatID
	msg, err := b.SendPhoto(context.Background(), &message)
	return msg, err
}

func Report(message string, b *bot.Bot) (*models.Message, error) {
	msg, err := b.SendMessage(context.Background(),
		&bot.SendMessageParams{
			ChatID: 231031476,
			Text:   message,
		})
	return msg, err
}
