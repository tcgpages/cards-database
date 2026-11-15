import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ミルホッグ"
	},
	"illustrator": "5ban Graphics",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		505
	],
	"hp": 90,
	"types": [
		"Colorless"
	],
	"stage": "Stage1",
	"description": {
		"ja": "体内の 発光物質で 目玉や 体を 光らせ 襲ってきた 敵を ひるませる。"
	},
	"attacks": [
		{
			"name": {
				"ja": "きずにかみつく"
			},
			"effect": {
				"ja": "相手のバトルポケモンにのっているダメカンの数×10ダメージを追加。"
			},
			"cost": [
				"Colorless",
				"Colorless"
			],
			"damage": "20+"
		},
		{
			"name": {
				"ja": "けたぐり"
			},
			"cost": [
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
	"retreat": 1,
	"evolveFrom": {
		"ja": "ミネズミ"
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
