import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "イワパレス"
	},
	"illustrator": "Naoyo Kimura",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		558
	],
	"hp": 100,
	"types": [
		"Grass"
	],
	"stage": "Stage1",
	"description": {
		"ja": "縄張りを 取り合って イワパレス 同士が 激しく 戦う。 岩を 壊された 方が 負け。"
	},
	"attacks": [
		{
			"name": {
				"ja": "シザークロス"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、50ダメージを追加。"
			},
			"cost": [
				"Grass",
				"Colorless"
			],
			"damage": "20+"
		},
		{
			"name": {
				"ja": "とつげき"
			},
			"effect": {
				"ja": "このポケモンにも10ダメージ。"
			},
			"cost": [
				"Grass",
				"Colorless",
				"Colorless"
			],
			"damage": 80
		}
	],
	"weaknesses": [
		{
			"type": "Fire",
			"value": "×2"
		}
	],
	"retreat": 3,
	"evolveFrom": {
		"ja": "イシズマイ"
	},
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
