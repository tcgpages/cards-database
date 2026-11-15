import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "シビシラス"
	},
	"illustrator": "sui",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		602
	],
	"hp": 40,
	"types": [
		"Lightning"
	],
	"stage": "Basic",
	"description": {
		"ja": "１匹の 電力は 小さいが たくさんの シビシラスが つながると 雷と 同じ 威力になる。"
	},
	"attacks": [
		{
			"name": {
				"ja": "でんじは"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			"cost": [
				"Lightning"
			],
			"damage": 10
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
