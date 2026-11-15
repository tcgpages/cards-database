import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ゴマゾウ"
	},
	"illustrator": "Sumiyoshi Kizuki",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		231
	],
	"hp": 80,
	"types": [
		"Fighting"
	],
	"stage": "Basic",
	"description": {
		"ja": "体は 小さいが 力持ち。 大人の 人を 軽々と 背中に 乗せて 歩いてしまう。"
	},
	"attacks": [
		{
			"name": {
				"ja": "たいあたり"
			},
			"cost": [
				"Fighting"
			],
			"damage": 10
		},
		{
			"name": {
				"ja": "ころがる"
			},
			"cost": [
				"Fighting",
				"Fighting",
				"Colorless"
			],
			"damage": 50
		}
	],
	"weaknesses": [
		{
			"type": "Water",
			"value": "×2"
		}
	],
	"resistances": [
		{
			"type": "Lightning",
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
		},
		{
			"type": "normal"
		}
	]
}

export default card
