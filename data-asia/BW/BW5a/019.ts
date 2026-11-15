import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "メリープ"
	},
	"illustrator": "sui",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		179
	],
	"hp": 60,
	"types": [
		"Lightning"
	],
	"stage": "Basic",
	"description": {
		"ja": "ふわふわの 体毛は 静電気が たまると ２倍に 膨らむ。 触ると 感電してしまう。"
	},
	"attacks": [
		{
			"name": {
				"ja": "コットンガード"
			},
			"effect": {
				"ja": "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。"
			},
			"cost": [
				"Colorless"
			]
		},
		{
			"name": {
				"ja": "でんげき"
			},
			"effect": {
				"ja": "コインを1回投げウラなら、このポケモンにも10ダメージ。"
			},
			"cost": [
				"Lightning",
				"Colorless"
			],
			"damage": 30
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
