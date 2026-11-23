import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "オーベム"
	},
	"illustrator": "5ban Graphics",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		606
	],
	"hp": 90,
	"types": [
		"Psychic"
	],
	"stage": "Stage1",
	"description": {
		"ja": "指先を 点滅 させて 会話するらしいが その パターンは まだ 解読 できていない。"
	},
	"attacks": [
		{
			"name": {
				"ja": "とじこめる"
			},
			"effect": {
				"ja": "次の相手の番、このワザを受けた相手のバトルポケモンは、にげられない。"
			},
			"cost": [
				"Psychic"
			],
			"damage": 20
		},
		{
			"name": {
				"ja": "ダメージキネシス"
			},
			"effect": {
				"ja": "自分の場のポケモンにのっているダメカンを6個選び、相手のバトルポケモンにのせ替える。"
			},
			"cost": [
				"Psychic",
				"Colorless",
				"Colorless"
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
	"evolveFrom": {
		"ja": "リグレー"
	},
	"variants": [
		{
			"type": "normal",
			"stamp": [
				"1st-edition"
			]
		},
		{
			"type": "normal"
		}
	]
}

export default card
