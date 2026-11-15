import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "モココ"
	},
	"illustrator": "Atsuko Nishida",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		180
	],
	"hp": 80,
	"types": [
		"Lightning"
	],
	"stage": "Stage1",
	"description": {
		"ja": "体毛に ためた 電気が 満タンになると しっぽが 光る。 触れると しびれる 毛を 飛ばす。"
	},
	"attacks": [
		{
			"name": {
				"ja": "コットンガード"
			},
			"effect": {
				"ja": "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。"
			},
			"cost": [
				"Colorless"
			],
			"damage": 20
		},
		{
			"name": {
				"ja": "パワージェム"
			},
			"cost": [
				"Lightning",
				"Colorless",
				"Colorless"
			],
			"damage": 40
		}
	],
	"weaknesses": [
		{
			"type": "Fighting",
			"value": "×2"
		}
	],
	"retreat": 1,
	"evolveFrom": {
		"ja": "デンリュウ"
	},
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
