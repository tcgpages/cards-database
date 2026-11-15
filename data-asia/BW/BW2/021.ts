import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "プルリル"
	},
	"illustrator": "Naoyo Kimura",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		592
	],
	"hp": 80,
	"types": [
		"Water"
	],
	"stage": "Basic",
	"description": {
		"ja": "薄い ベールのような 腕で 相手の 体を 縛りつけたまま 海の 底へ 沈んでいくのだ。"
	},
	"attacks": [
		{
			"name": {
				"ja": "みずかけ"
			},
			"cost": [
				"Colorless",
				"Colorless"
			],
			"damage": 20
		}
	],
	"weaknesses": [
		{
			"type": "Lightning",
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
