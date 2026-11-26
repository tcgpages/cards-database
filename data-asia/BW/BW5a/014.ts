import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "フローゼル"
	},
	"illustrator": "Naoki Saito",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		419
	],
	"hp": 90,
	"types": [
		"Water"
	],
	"stage": "Stage1",
	"description": {
		"ja": "漁師町に 多く 見られ おぼれた 人を 助けたり 取った 獲物を 運んでいる。"
	},
	"attacks": [
		{
			"name": {
				"ja": "スプラッシュ"
			},
			"cost": [
				"Colorless"
			],
			"damage": 20
		},
		{
			"name": {
				"ja": "たきのぼり"
			},
			"cost": [
				"Water",
				"Water"
			],
			"damage": 60
		}
	],
	"weaknesses": [
		{
			"type": "Lightning",
			"value": "×2"
		}
	],
	"retreat": 1,
	"evolveFrom": {
		"ja": "ブイゼル"
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
