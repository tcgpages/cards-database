import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ズバット"
	},
	"illustrator": "Mizue",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		41
	],
	"hp": 40,
	"types": [
		"Psychic"
	],
	"stage": "Basic",
	"description": {
		"ja": "超音波を だして 周りの 様子を 確かめながら 飛ぶので 両目が なくても 大丈夫。"
	},
	"abilities": [
		{
			"type": "Ability",
			"name": {
				"ja": "フリーフライト"
			},
			"effect": {
				"ja": "このポケモンにエネルギーがついていないなら、このポケモンのにげるために必要なエネルギーは、すべてなくなる。"
			}
		}
	],
	"attacks": [
		{
			"name": {
				"ja": "つばさでうつ"
			},
			"cost": [
				"Psychic",
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
