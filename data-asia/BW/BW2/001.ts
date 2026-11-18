import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "イシズマイ"
	},
	"illustrator": "MAHOU",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		557
	],
	"hp": 60,
	"types": [
		"Grass"
	],
	"stage": "Basic",
	"description": {
		"ja": "石を 溶かす 液体を 口から 分泌するので 硬い 石でも 簡単に 穴を 開けられるのだ。"
	},
	"attacks": [
		{
			"name": {
				"ja": "からにこもる"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。"
			},
			"cost": [
				"Colorless"
			]
		},
		{
			"name": {
				"ja": "きりさく"
			},
			"cost": [
				"Grass",
				"Colorless"
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
	"retreat": 2,
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
