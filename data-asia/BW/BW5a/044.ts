import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "エテボース"
	},
	"illustrator": "Akira Komayama",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		424
	],
	"hp": 80,
	"types": [
		"Colorless"
	],
	"stage": "Stage1",
	"description": {
		"ja": "２本に 分かれた しっぽは いろんなことが 器用に できるので ほとんど 手を 使わなくなった。"
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
				"ja": "ハンドスリング"
			},
			"effect": {
				"ja": "自分の手札の枚数×10ダメージ。"
			},
			"cost": [
				"Colorless",
				"Colorless"
			],
			"damage": "10×"
		}
	],
	"weaknesses": [
		{
			"type": "Fighting",
			"value": "×2"
		}
	],
	"retreat": 1,
	"evolveFrom": {
		"ja": "エイパム"
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
