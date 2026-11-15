import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ビッパ"
	},
	"illustrator": "match",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		399
	],
	"hp": 70,
	"types": [
		"Colorless"
	],
	"stage": "Basic",
	"description": {
		"ja": "ビッパと コラッタの 前歯 どちらが 伸びるのが 早いのか 比べたところ 引き分け だった。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ごっつんヘッド"
			},
			"effect": {
				"ja": "このポケモンと相手のバトルポケモンをこんらんにする。"
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
	"retreat": 2,
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
