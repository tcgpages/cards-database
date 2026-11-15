import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "バオップ"
	},
	"illustrator": "Atsuko Nishida",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		513
	],
	"hp": 70,
	"types": [
		"Fire"
	],
	"stage": "Basic",
	"description": {
		"ja": "知能が 高く きのみは 焼いてから 食べる 習性。 人の 手伝いを 好んでいる。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ひっかく"
			},
			"cost": [
				"Colorless",
				"Colorless"
			],
			"damage": 20
		},
		{
			"name": {
				"ja": "ダブルファイヤー"
			},
			"effect": {
				"ja": "コインを2回投げ、オモテの数×40ダメージ。"
			},
			"cost": [
				"Fire",
				"Fire",
				"Colorless"
			],
			"damage": "40×"
		}
	],
	"weaknesses": [
		{
			"type": "Water",
			"value": "×2"
		}
	],
	"retreat": 1,
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
