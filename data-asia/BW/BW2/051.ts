import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "ジヘッド"
	},
	"illustrator": "Masakazu Fukuda",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		634
	],
	"hp": 90,
	"types": [
		"Darkness"
	],
	"stage": "Stage1",
	"description": {
		"ja": "２つの 頭は 仲が 悪く 争うように エサを 食べるため いつも エサを 食べ過ぎてしまう。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ダブルアタック"
			},
			"effect": {
				"ja": "コインを2回投げ、オモテの数×20ダメージ。"
			},
			"cost": [
				"Colorless"
			],
			"damage": "20×"
		},
		{
			"name": {
				"ja": "かいりき"
			},
			"cost": [
				"Darkness",
				"Colorless",
				"Colorless"
			],
			"damage": 50
		}
	],
	"weaknesses": [
		{
			"type": "Fighting",
			"value": "×2"
		}
	],
	"resistances": [
		{
			"type": "Psychic",
			"value": "－20"
		}
	],
	"retreat": 2,
	"evolveFrom": {
		"ja": "サザンドラBREAK"
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
