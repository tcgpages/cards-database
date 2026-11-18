import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "プロトーガ"
	},
	"illustrator": "Naoyo Kimura",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		564
	],
	"hp": 90,
	"types": [
		"Water"
	],
	"stage": "RESTORED",
	"description": {
		"ja": "古代の 化石から 復活した。 深さ １０００メートルまで 潜水することが できる。"
	},
	"attacks": [
		{
			"name": {
				"ja": "みずでっぽう"
			},
			"cost": [
				"Water",
				"Colorless"
			],
			"damage": 30
		},
		{
			"name": {
				"ja": "なみのり"
			},
			"cost": [
				"Water",
				"Colorless",
				"Colorless"
			],
			"damage": 60
		}
	],
	"weaknesses": [
		{
			"type": "Grass",
			"value": "×2"
		}
	],
	"retreat": 3,
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
