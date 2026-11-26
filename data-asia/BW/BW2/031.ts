import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "ダストダス"
	},
	"illustrator": "match",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		569
	],
	"hp": 100,
	"types": [
		"Psychic"
	],
	"stage": "Stage1",
	"description": {
		"ja": "ゴミを 吸い込んで 体の 一部に してしまう。 右腕の 指先から 毒液を 噴射。"
	},
	"attacks": [
		{
			"name": {
				"ja": "まとわりつく"
			},
			"effect": {
				"ja": "次の相手の番、このワザを受けた相手のバトルポケモンは、にげられない。"
			},
			"cost": [
				"Psychic",
				"Colorless"
			],
			"damage": 30
		},
		{
			"name": {
				"ja": "ダストシュート"
			},
			"effect": {
				"ja": "相手のバトルポケモンをどくにする。"
			},
			"cost": [
				"Psychic",
				"Psychic",
				"Colorless"
			],
			"damage": 60
		}
	],
	"weaknesses": [
		{
			"type": "Psychic",
			"value": "×2"
		}
	],
	"retreat": 3,
	"evolveFrom": {
		"ja": "ヤブクロン"
	},
	"variants": [
		{
			"type": "normal",
			"stamp": [
				"1st-edition"
			]
		}
	]
}

export default card
