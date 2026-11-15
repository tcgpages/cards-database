import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ネンドール"
	},
	"illustrator": "Shin Nagasawa",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		344
	],
	"hp": 90,
	"types": [
		"Fighting"
	],
	"stage": "Stage1",
	"description": {
		"ja": "古代の 泥人形が 怪光線を 浴びたことで 命が 宿り ポケモンとなった。"
	},
	"attacks": [
		{
			"name": {
				"ja": "こうそくスピン"
			},
			"effect": {
				"ja": "このポケモンをベンチポケモンと入れ替える。その後、相手は相手自身のバトルポケモンをベンチポケモンと入れ替える。"
			},
			"cost": [
				"Colorless",
				"Colorless"
			],
			"damage": 30
		},
		{
			"name": {
				"ja": "いわくだき"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、30ダメージを追加。"
			},
			"cost": [
				"Fighting",
				"Colorless",
				"Colorless"
			],
			"damage": "60+"
		}
	],
	"weaknesses": [
		{
			"type": "Grass",
			"value": "×2"
		}
	],
	"retreat": 3,
	"evolveFrom": {
		"ja": "ヤジロン"
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
