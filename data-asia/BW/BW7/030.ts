import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ドガース"
	},
	"illustrator": "match",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		109
	],
	"hp": 60,
	"types": [
		"Psychic"
	],
	"stage": "Basic",
	"description": {
		"ja": "薄い バルーン状の 体に 猛毒の ガスが 詰まっているので ときどき 大爆発を 起こす。"
	},
	"attacks": [
		{
			"name": {
				"ja": "えんまく"
			},
			"effect": {
				"ja": "次の相手の番、このワザを受けた相手のバトルポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。"
			},
			"cost": [
				"Psychic",
				"Colorless"
			],
			"damage": 20
		}
	],
	"weaknesses": [
		{
			"type": "Psychic",
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
