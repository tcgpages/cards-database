import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "オノンド"
	},
	"illustrator": "Kagemaru Himeno",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		611
	],
	"hp": 90,
	"types": [
		"Colorless"
	],
	"stage": "Stage1",
	"description": {
		"ja": "折れた キバは 生え変わらないので 戦いが 終わると 河原の 岩で キバを 丹念に 磨く。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ひっかく"
			},
			"cost": [
				"Colorless"
			],
			"damage": 20
		},
		{
			"name": {
				"ja": "ダブルチョップ"
			},
			"effect": {
				"ja": "コインを2回投げ、オモテの数×30ダメージ。"
			},
			"cost": [
				"Colorless",
				"Colorless"
			],
			"damage": "30×"
		}
	],
	"retreat": 2,
	"evolveFrom": {
		"ja": "オノノクス"
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
