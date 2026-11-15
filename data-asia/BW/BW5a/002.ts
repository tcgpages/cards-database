import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "メガヤンマ"
	},
	"illustrator": "Naoki Saito",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		469
	],
	"hp": 100,
	"types": [
		"Grass"
	],
	"stage": "Stage1",
	"description": {
		"ja": "アゴの 力は けたはずれ 高速で 飛んで すれ違いざまに 相手を かみちぎるのが 得意。"
	},
	"attacks": [
		{
			"name": {
				"ja": "こうそくいどう"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。"
			},
			"cost": [
				"Colorless",
				"Colorless"
			],
			"damage": 30
		},
		{
			"name": {
				"ja": "カッターウインド"
			},
			"cost": [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			"damage": 70
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
	"retreat": 0,
	"evolveFrom": {
		"ja": "メガヤンマBREAK"
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
