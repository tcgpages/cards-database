import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "チョボマキ"
	},
	"illustrator": "Midori Harada",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		616
	],
	"hp": 60,
	"types": [
		"Grass"
	],
	"stage": "Basic",
	"description": {
		"ja": "カブルモと ともに 電気的な エネルギーを 浴びると 進化する。 理由は 解明されていない。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ふしぎなしんか"
			},
			"effect": {
				"ja": "自分または相手の場に「カブルモ」がいるなら、このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。"
			},
			"cost": [
				"Colorless"
			]
		},
		{
			"name": {
				"ja": "ぶつかる"
			},
			"cost": [
				"Grass"
			],
			"damage": 10
		}
	],
	"weaknesses": [
		{
			"type": "Fire",
			"value": "×2"
		}
	],
	"retreat": 3,
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
