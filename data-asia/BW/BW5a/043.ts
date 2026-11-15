import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "エイパム"
	},
	"illustrator": "sui",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		190
	],
	"hp": 60,
	"types": [
		"Colorless"
	],
	"stage": "Basic",
	"description": {
		"ja": "手よりも 自由自在に 動く しっぽを 巧みに 操りながら 高い 木の上で 暮らしている。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ダブルアタック"
			},
			"effect": {
				"ja": "コインを2回投げ、オモテの数×10ダメージ。"
			},
			"cost": [
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
