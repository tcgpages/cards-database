import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "モノズ"
	},
	"illustrator": "Mitsuhiro Arita",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		633
	],
	"hp": 60,
	"types": [
		"Darkness"
	],
	"stage": "Basic",
	"description": {
		"ja": "目が 見えないため 体当たりしたり かみついて まわりを 探る。 体中 生傷が 絶えない。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ずつき"
			},
			"cost": [
				"Colorless"
			],
			"damage": 10
		},
		{
			"name": {
				"ja": "かみつく"
			},
			"cost": [
				"Darkness",
				"Colorless"
			],
			"damage": 20
		}
	],
	"weaknesses": [
		{
			"type": "Fighting",
			"value": "×2"
		}
	],
	"resistances": [
		{
			"type": "Psychic",
			"value": "－20"
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
