import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "チェリンボ"
	},
	"illustrator": "sui",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		420
	],
	"hp": 40,
	"types": [
		"Grass"
	],
	"stage": "Basic",
	"description": {
		"ja": "小さな 玉には 栄養が つまっているだけでなく おいしいので ムックルに ついばまれたりする。"
	},
	"attacks": [
		{
			"name": {
				"ja": "やどりぎのタネ"
			},
			"effect": {
				"ja": "このポケモンのHPを「10」回復する。"
			},
			"cost": [
				"Grass"
			],
			"damage": 10
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
		},
		{
			"type": "normal"
		}
	]
}

export default card
