import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "コジョンド"
	},
	"illustrator": "Atsuko Nishida",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		620
	],
	"hp": 90,
	"types": [
		"Fighting"
	],
	"stage": "Stage1",
	"description": {
		"ja": "腕の 体毛を ムチのように あつかう。 両腕の 攻撃は 目にも 止まらぬ 速さ。"
	},
	"attacks": [
		{
			"name": {
				"ja": "フェイント"
			},
			"effect": {
				"ja": "このワザのダメージは抵抗力の計算をしない。"
			},
			"cost": [
				"Colorless"
			],
			"damage": 30
		},
		{
			"name": {
				"ja": "とびひざげり"
			},
			"cost": [
				"Fighting",
				"Fighting"
			],
			"damage": 50
		}
	],
	"weaknesses": [
		{
			"type": "Psychic",
			"value": "×2"
		}
	],
	"retreat": 1,
	"evolveFrom": {
		"ja": "コジョフー"
	},
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
