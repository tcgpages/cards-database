import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "キバゴ"
	},
	"illustrator": "Atsuko Nishida",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		610
	],
	"hp": 60,
	"types": [
		"Colorless"
	],
	"stage": "Basic",
	"description": {
		"ja": "木の実を キバで 砕いて 食べる。 何回も 生え変わることで 強く 鋭い キバに なる。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ダブルチョップ"
			},
			"effect": {
				"ja": "コインを2回投げ、オモテの数×10ダメージ。"
			},
			"cost": [
				"Colorless"
			],
			"damage": "10×"
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
