import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ブイゼル"
	},
	"illustrator": "Kyoko Umemoto",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		418
	],
	"hp": 70,
	"types": [
		"Water"
	],
	"stage": "Basic",
	"description": {
		"ja": "しっぽを スクリューのように 回し 水中を 泳ぐだけでなく まとわりつく 海草も 切れる。"
	},
	"attacks": [
		{
			"name": {
				"ja": "スプラッシュ"
			},
			"cost": [
				"Colorless"
			],
			"damage": 10
		}
	],
	"weaknesses": [
		{
			"type": "Lightning",
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
