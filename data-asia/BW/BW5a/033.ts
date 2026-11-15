import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ヤミカラス"
	},
	"illustrator": "Naoyo Kimura",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		198
	],
	"hp": 70,
	"types": [
		"Darkness"
	],
	"stage": "Basic",
	"description": {
		"ja": "ヤミカラスを 見かけて 不用意に 後を つけていくと 迷わされ 山道に 置いてけぼりに される。"
	},
	"attacks": [
		{
			"name": {
				"ja": "つつく"
			},
			"cost": [
				"Colorless"
			],
			"damage": 10
		},
		{
			"name": {
				"ja": "つばさでうつ"
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
			"type": "Lightning",
			"value": "×2"
		}
	],
	"resistances": [
		{
			"type": "Fighting",
			"value": "－20"
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
