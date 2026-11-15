import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "フワンテ"
	},
	"illustrator": "MAHOU",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		425
	],
	"hp": 60,
	"types": [
		"Psychic"
	],
	"stage": "Basic",
	"description": {
		"ja": "あてもなく 浮かぶ 様子から 迷える 魂の 道しるべ と 伝える 昔話も ある。"
	},
	"attacks": [
		{
			"name": {
				"ja": "そっとのせる"
			},
			"effect": {
				"ja": "相手のポケモンを1匹選び、ダメカンを1個のせる。"
			},
			"cost": [
				"Psychic"
			]
		}
	],
	"weaknesses": [
		{
			"type": "Darkness",
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
