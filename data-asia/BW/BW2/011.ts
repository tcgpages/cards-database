import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "メラルバ"
	},
	"illustrator": "Kagemaru Himeno",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		636
	],
	"hp": 70,
	"types": [
		"Fire"
	],
	"stage": "Basic",
	"description": {
		"ja": "太陽から 生まれた ポケモンと 信じられてきた。 進化するとき 全身が 炎に 包まれる。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ひのこ"
			},
			"effect": {
				"ja": "コインを1回投げウラなら、このポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			"cost": [
				"Fire"
			],
			"damage": 20
		}
	],
	"weaknesses": [
		{
			"type": "Water",
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
		}
	]
}

export default card
