import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "クイタラン"
	},
	"illustrator": "Kouki Saitou",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		631
	],
	"hp": 90,
	"types": [
		"Fire"
	],
	"stage": "Basic",
	"description": {
		"ja": "高温で 燃える 炎の 舌で アイアントの 鋼の 体を 溶かして 中身を いただくのだ。"
	},
	"attacks": [
		{
			"name": {
				"ja": "こがす"
			},
			"effect": {
				"ja": "相手のバトルポケモンをやけどにする。"
			},
			"cost": [
				"Fire"
			]
		},
		{
			"name": {
				"ja": "やきつくす"
			},
			"effect": {
				"ja": "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。"
			},
			"cost": [
				"Fire",
				"Colorless"
			],
			"damage": 30
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
