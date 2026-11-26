import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ヒコザル"
	},
	"illustrator": "sui",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		390
	],
	"hp": 50,
	"types": [
		"Fire"
	],
	"stage": "Basic",
	"description": {
		"ja": "とても 身軽な ポケモン。 まわりが 燃えないように おしりの 炎を 消してから 眠る。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ほのお"
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
