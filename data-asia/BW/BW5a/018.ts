import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ママンボウ"
	},
	"illustrator": "Miki Tanaka",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		594
	],
	"hp": 90,
	"types": [
		"Water"
	],
	"stage": "Basic",
	"description": {
		"ja": "ママンボウの 体を おおう 特殊な 粘膜には 傷を 治す 効果が ある。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ふしぎなビーム"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			"cost": [
				"Water",
				"Colorless"
			],
			"damage": 30
		},
		{
			"name": {
				"ja": "おうふくビンタ"
			},
			"effect": {
				"ja": "コインを2回投げ、オモテの数×50ダメージ。"
			},
			"cost": [
				"Water",
				"Colorless",
				"Colorless"
			],
			"damage": "50×"
		}
	],
	"weaknesses": [
		{
			"type": "Lightning",
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
