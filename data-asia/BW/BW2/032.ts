import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "リグレー"
	},
	"illustrator": "sui",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		605
	],
	"hp": 60,
	"types": [
		"Psychic"
	],
	"stage": "Basic",
	"description": {
		"ja": "５０年前に 砂漠の 彼方から 突然 やってきた。 その ときまで だれも 見たことが ない ポケモン。"
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
				"ja": "めいそう"
			},
			"effect": {
				"ja": "このポケモンのHPを「30」回復する。"
			},
			"cost": [
				"Psychic"
			]
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
		}
	]
}

export default card
