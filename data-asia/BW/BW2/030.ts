import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "ヤブクロン"
	},
	"illustrator": "MAHOU",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		568
	],
	"hp": 60,
	"types": [
		"Psychic"
	],
	"stage": "Basic",
	"description": {
		"ja": "ゴミ袋が 産業廃棄物と 化学変化を 起こした ことで ポケモンとして 生まれ変わった。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ゴミあつめ"
			},
			"effect": {
				"ja": "自分のトラッシュから好きなカードを1枚選び、相手に見せてから、山札の上にもどす。"
			},
			"cost": [
				"Colorless"
			]
		},
		{
			"name": {
				"ja": "ヘドロばくだん"
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
			"type": "Psychic",
			"value": "×2"
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
