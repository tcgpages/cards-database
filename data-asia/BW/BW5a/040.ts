import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "モノズ"
	},
	"illustrator": "kawayoo",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		633
	],
	"hp": 60,
	"types": [
		"Dragon"
	],
	"stage": "Basic",
	"description": {
		"ja": "なんにでも かみつく 習性。 食べられるものは なんでも 食べる。 うかつに 近寄ると 危険だ。"
	},
	"attacks": [
		{
			"name": {
				"ja": "うなりごえ"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			"cost": [
				"Darkness"
			]
		},
		{
			"name": {
				"ja": "パワーブレス"
			},
			"effect": {
				"ja": "このポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			"cost": [
				"Psychic",
				"Colorless"
			],
			"damage": 30
		}
	],
	"weaknesses": [
		{
			"type": "Dragon",
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
		},
		{
			"type": "normal"
		}
	]
}

export default card
