import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ドードー"
	},
	"illustrator": "Kyoko Umemoto",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		84
	],
	"hp": 60,
	"types": [
		"Colorless"
	],
	"stage": "Basic",
	"description": {
		"ja": "２つの 頭の 脳みそは テレパシーのような 力で 気持ちを 通じ合わせているらしい。"
	},
	"attacks": [
		{
			"name": {
				"ja": "マシンガンつつき"
			},
			"effect": {
				"ja": "コインを5回投げ、オモテの数×10ダメージ。"
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
