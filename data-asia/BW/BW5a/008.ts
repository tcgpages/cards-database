import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ロズレイド"
	},
	"illustrator": "Kyoko Umemoto",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		407
	],
	"hp": 90,
	"types": [
		"Grass"
	],
	"stage": "Stage1",
	"description": {
		"ja": "両手の 毒の 成分は それぞれ 違う 種類だが どっちを 刺されても 死にかける。"
	},
	"attacks": [
		{
			"name": {
				"ja": "クロスウィップ"
			},
			"effect": {
				"ja": "コインを4回投げ、オモテの数×30ダメージ。"
			},
			"cost": [
				"Grass"
			],
			"damage": "30×"
		},
		{
			"name": {
				"ja": "どくのトゲ"
			},
			"effect": {
				"ja": "相手のバトルポケモンをどくにする。"
			},
			"cost": [
				"Grass",
				"Colorless",
				"Colorless"
			],
			"damage": 60
		}
	],
	"weaknesses": [
		{
			"type": "Fire",
			"value": "×2"
		}
	],
	"resistances": [
		{
			"type": "Water",
			"value": "－20"
		}
	],
	"retreat": 1,
	"evolveFrom": {
		"ja": "ロゼリア"
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
