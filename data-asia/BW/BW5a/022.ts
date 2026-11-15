import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ミュウEX"
	},
	"illustrator": "Eske Yoshinob",
	"rarity": "Rare",
	"category": "Pokemon",
	"dexId": [
		151
	],
	"hp": 120,
	"types": [
		"Psychic"
	],
	"stage": "Basic",
	"suffix": "EX",
	"abilities": [
		{
			"type": "Ability",
			"name": {
				"ja": "オールマイティー"
			},
			"effect": {
				"ja": "このポケモンは、おたがいのポケモンが持つワザをすべて使える。[ワザを使うためのエネルギーは必要。]"
			}
		}
	],
	"attacks": [
		{
			"name": {
				"ja": "リプレイス"
			},
			"effect": {
				"ja": "自分のポケモンについているエネルギーを好きなだけ選び、自分のポケモンに好きなようにつけ替える。"
			},
			"cost": [
				"Psychic"
			]
		}
	],
	"weaknesses": [
		{
			"type": "Psychic",
			"value": "×2"
		}
	],
	"retreat": 1,
	"variants": [
		{
			"type": "holo",
			"stamp": [
				"1st-edition"
			]
		},
		{
			"type": "holo"
		}
	]
}

export default card
