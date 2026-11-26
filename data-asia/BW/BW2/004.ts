import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "タマゲタケ"
	},
	"illustrator": "match",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		590
	],
	"hp": 40,
	"types": [
		"Grass"
	],
	"stage": "Basic",
	"description": {
		"ja": "モンスターボールに なぜか 似ている ポケモン。 捕まえようとした敵に 毒胞子を 吹きかけて 撃退。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ころがる"
			},
			"cost": [
				"Grass"
			],
			"damage": 20
		}
	],
	"weaknesses": [
		{
			"type": "Fire",
			"value": "×2"
		}
	],
	"resistances": [
		{
			"type": "Water",
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
		}
	]
}

export default card
