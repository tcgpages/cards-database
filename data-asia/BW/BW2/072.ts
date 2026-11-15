import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "ニャース"
	},
	"illustrator": "Kouki Saitou",
	"rarity": "Secret Rare",
	"category": "Pokemon",
	"dexId": [
		52
	],
	"hp": 60,
	"types": [
		"Colorless"
	],
	"stage": "Basic",
	"attacks": [
		{
			"name": {
				"ja": "みだれひっかき"
			},
			"effect": {
				"ja": "コインを3回投げ、オモテの数×10ダメージ。"
			},
			"cost": [
				"Colorless"
			],
			"damage": "10×"
		},
		{
			"name": {
				"ja": "ネコにばん"
			},
			"effect": {
				"ja": "自分の山札を1枚引く。"
			},
			"cost": [
				"Colorless",
				"Colorless"
			],
			"damage": 20
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
		}
	]
}

export default card
