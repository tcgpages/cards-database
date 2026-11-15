import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "リオル"
	},
	"illustrator": "Akira Komayama",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		447
	],
	"hp": 70,
	"types": [
		"Fighting"
	],
	"stage": "Basic",
	"description": {
		"ja": "感情で 形が 変わる 波動を だしあって 仲間同士 コミュニケーションを とっている。"
	},
	"attacks": [
		{
			"name": {
				"ja": "キック"
			},
			"cost": [
				"Colorless",
				"Colorless"
			],
			"damage": 20
		},
		{
			"name": {
				"ja": "フェイント"
			},
			"effect": {
				"ja": "このワザのダメージは抵抗力の計算をしない。"
			},
			"cost": [
				"Fighting",
				"Colorless",
				"Colorless"
			],
			"damage": 40
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
		},
		{
			"type": "normal"
		}
	]
}

export default card
