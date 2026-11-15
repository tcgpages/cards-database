import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ハスブレロ"
	},
	"illustrator": "Suwama Chiaki",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		271
	],
	"hp": 80,
	"types": [
		"Water"
	],
	"stage": "Stage1",
	"description": {
		"ja": "釣り人を 見つけると 水中から 釣り糸を 引っ張り ジャマして 喜ぶ いたずらもの。"
	},
	"attacks": [
		{
			"name": {
				"ja": "とびつく"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、20ダメージを追加。"
			},
			"cost": [
				"Colorless",
				"Colorless"
			],
			"damage": "20+"
		},
		{
			"name": {
				"ja": "スプラッシュ"
			},
			"cost": [
				"Water",
				"Colorless",
				"Colorless"
			],
			"damage": 50
		}
	],
	"weaknesses": [
		{
			"type": "Lightning",
			"value": "×2"
		}
	],
	"retreat": 2,
	"evolveFrom": {
		"ja": "ルンパッパ"
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
