import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ビーダル"
	},
	"illustrator": "kawayoo",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		400
	],
	"hp": 100,
	"types": [
		"Colorless"
	],
	"stage": "Stage1",
	"description": {
		"ja": "ビーダルが ダムを 作った 川は はんらん することがないので 近くの 人から 感謝される。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ドわすれ"
			},
			"effect": {
				"ja": "相手のバトルポケモンが持っているワザを1つ選ぶ。次の相手の番、このワザを受けた相手のバトルポケモンは、選ばれたワザを使えない。"
			},
			"cost": [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			"damage": 40
		},
		{
			"name": {
				"ja": "ぐるぐるタックル"
			},
			"effect": {
				"ja": "このポケモンと相手のバトルポケモンをねむりにする。"
			},
			"cost": [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			"damage": 60
		}
	],
	"weaknesses": [
		{
			"type": "Fighting",
			"value": "×2"
		}
	],
	"retreat": 2,
	"evolveFrom": {
		"ja": "ビッパ"
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
