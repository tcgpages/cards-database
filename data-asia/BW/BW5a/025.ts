import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "フワライド"
	},
	"illustrator": "Kanako Eo",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		426
	],
	"hp": 100,
	"types": [
		"Psychic"
	],
	"stage": "Stage1",
	"description": {
		"ja": "夕暮れ 群れになって 大空を 風に 流されていくが 気づくと いつのまにか 消えてしまっている。"
	},
	"attacks": [
		{
			"name": {
				"ja": "シャドースチール"
			},
			"effect": {
				"ja": "相手のトラッシュにある特殊エネルギーの枚数×50ダメージ。"
			},
			"cost": [
				"Colorless"
			],
			"damage": "50×"
		},
		{
			"name": {
				"ja": "しこたまのせる"
			},
			"effect": {
				"ja": "相手のポケモンを1匹選び、ダメカンを4個のせる。"
			},
			"cost": [
				"Psychic",
				"Colorless"
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
	"evolveFrom": {
		"ja": "フワンテ"
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
