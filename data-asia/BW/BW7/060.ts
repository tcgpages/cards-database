import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ミネズミ"
	},
	"illustrator": "Naoki Saito",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		504
	],
	"hp": 50,
	"types": [
		"Colorless"
	],
	"stage": "Basic",
	"description": {
		"ja": "警戒心が 強く 必ず 一匹は 見張りを しているのだが 後ろからの 敵には 気づかない。"
	},
	"attacks": [
		{
			"name": {
				"ja": "もってくる"
			},
			"effect": {
				"ja": "自分の山札を1枚引く。"
			},
			"cost": [
				"Colorless"
			]
		},
		{
			"name": {
				"ja": "たたきつける"
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
