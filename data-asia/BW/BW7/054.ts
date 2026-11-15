import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ドードリオ"
	},
	"illustrator": "kawayoo",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		85
	],
	"hp": 90,
	"types": [
		"Colorless"
	],
	"stage": "Stage1",
	"description": {
		"ja": "進化のときに ドードーの 頭の どちらかが 分裂した 珍種。 時速６０キロ以上で 走る。"
	},
	"attacks": [
		{
			"name": {
				"ja": "あばれつつき"
			},
			"effect": {
				"ja": "コインを3回投げ、オモテの数×30ダメージ。このポケモンをこんらんにする。"
			},
			"cost": [
				"Colorless"
			],
			"damage": "30×"
		},
		{
			"name": {
				"ja": "ドリルくちばし"
			},
			"cost": [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			"damage": 60
		}
	],
	"weaknesses": [
		{
			"type": "Lightning",
			"value": "×2"
		}
	],
	"resistances": [
		{
			"type": "Fighting",
			"value": "－20"
		}
	],
	"retreat": 1,
	"evolveFrom": {
		"ja": "ドードー"
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
