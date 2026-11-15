import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "カブルモ"
	},
	"illustrator": "sui",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		588
	],
	"hp": 60,
	"types": [
		"Grass"
	],
	"stage": "Basic",
	"description": {
		"ja": "危険を 感じると 口から 酸性の 液体を 飛ばして 敵を 撃退する。 チョボマキを ねらう ポケモン。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ふしぎなしんか"
			},
			"effect": {
				"ja": "自分または相手の場に「チョボマキ」がいるなら、このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。"
			},
			"cost": [
				"Colorless"
			]
		},
		{
			"name": {
				"ja": "みだれづき"
			},
			"effect": {
				"ja": "コインを3回投げ、オモテの数×10ダメージ。"
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
			"type": "Fire",
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
