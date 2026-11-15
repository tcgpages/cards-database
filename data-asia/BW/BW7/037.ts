import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ダストダス"
	},
	"illustrator": "5ban Graphics",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		569
	],
	"hp": 110,
	"types": [
		"Psychic"
	],
	"stage": "Stage1",
	"description": {
		"ja": "ゴミを 吸いとっては 体内で 新しい 種類の 毒ガスや 毒の 液体を 生みだしている。"
	},
	"attacks": [
		{
			"name": {
				"ja": "こんがらがる"
			},
			"effect": {
				"ja": "相手のバトルポケモンのにげるために必要なエネルギーの数×20ダメージ。"
			},
			"cost": [
				"Colorless",
				"Colorless"
			],
			"damage": "20×"
		},
		{
			"name": {
				"ja": "ダブルダクト"
			},
			"effect": {
				"ja": "コインを2回投げ、オモテの数×80ダメージ。"
			},
			"cost": [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			"damage": "80×"
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
		},
		{
			"type": "normal"
		}
	]
}

export default card
