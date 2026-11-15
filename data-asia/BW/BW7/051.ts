import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ピッピ"
	},
	"illustrator": "Atsuko Nishida",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		35
	],
	"hp": 60,
	"types": [
		"Colorless"
	],
	"stage": "Basic",
	"description": {
		"ja": "満月の 夜 どこから ともなく 集まり ピッピたちは 踊りだす。 月の光を 浴びて 浮かぶのだ。"
	},
	"attacks": [
		{
			"name": {
				"ja": "はたく"
			},
			"cost": [
				"Colorless"
			],
			"damage": 10
		},
		{
			"name": {
				"ja": "おうふくビンタ"
			},
			"effect": {
				"ja": "コインを2回投げ、オモテの数×20ダメージ。"
			},
			"cost": [
				"Colorless",
				"Colorless"
			],
			"damage": "20×"
		}
	],
	"weaknesses": [
		{
			"type": "Fighting",
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
