package queries

var UserGetByTgId = `
	select tg_id, username, is_premium, photo_url, balance from users where tg_id = $1;
`

var UserCreate = `
	insert into users (tg_id, username, is_premium, photo_url) values ($1, $2, $3, $4);
`

var UserUpdateBalanceByTgId = `
	update users set balance = $1 where tg_id = $2;
`

var AirdropClaim = `
	with ins as (
    insert into airdrop_claim (user_tg_id, airdrop_id, amount)
        select $1, $2, $3
        where not exists (select true
                          from airdrop_claim
                          where user_tg_id = $1
                            and airdrop_id = $2)
        returning user_tg_id, amount)
	update users
	set balance = balance + ins.amount
	from ins
	where users.tg_id = ins.user_tg_id
	returning ins.amount;
`

var IsAirdropClaimed = `
	select exists (
		select 1
		from airdrop_claim
		where user_tg_id = $1 and airdrop_id = $2
		);
`
