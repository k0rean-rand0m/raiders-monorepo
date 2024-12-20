package queries

var UserGetByTgId = `
	select tg_id, username, is_premium, photo_url, balance from users where tg_id = $1;
`

var UserCreate = `
	insert into users (tg_id, username, is_premium, photo_url) values ($1, $2, $3, $4);
`

var AirdropClaimEligible = `
	select case
           when exists (select 1
                        from airdrop_claim ac
                        where ac.user_tg_id = $1
                          and ac.airdrop_id = $2) then 'claimed'
           when (select count(*)
                 from airdrop_claim
                 where airdrop_id = $2) >= (select claim_limit
                                            from airdrops
                                            where id = $2) then 'expired'
           else 'eligible'
           end as status;
`

var AirdropClaim = `
	with claim as (
    insert
        into airdrop_claim (user_tg_id, airdrop_id, amount)
            select $1, $2, $3
            from airdrops
            where id = $2
              and (select count(*) from airdrop_claim where airdrop_id = $2) < claim_limit
              and not exists(select from airdrop_claim where airdrop_id = $2 and user_tg_id = $1)
        returning true
	)
	update users
	set balance = balance + $3
	where tg_id = $1
	  and exists (select 1 from claim)
	returning true as success;
`
