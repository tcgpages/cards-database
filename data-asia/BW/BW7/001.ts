import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ナエトル"
	},
	"illustrator": "Kouki Saitou",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		387
	],
	"hp": 70,
	"types": [
		"Grass"
	],
	"stage": "Basic",
	"description": {
		"ja": "土で できた 背中の 甲羅を 触って ほどよく 湿っていたなら その ナエトルは とても 元気だ。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ひとやすみ"
			},
			"effect": {
				"ja": "このポケモンのHPを「20」回復する。"
			},
			"cost": [
				"Colorless"
			]
		},
		{
			"name": {
				"ja": "はっぱカッター"
			},
			"cost": [
				"Grass",
				"Colorless",
				"Colorless"
			],
			"damage": 30
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
	"retreat": 2,
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
