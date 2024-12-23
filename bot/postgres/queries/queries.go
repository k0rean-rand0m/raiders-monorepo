package queries

var UserCreate = `
	INSERT INTO users (tg_id, username, is_premium, chat_id) 
	VALUES ($1, $2, $3, $4)
	ON CONFLICT (tg_id) 
	DO UPDATE SET chat_id = EXCLUDED.chat_id;
`
