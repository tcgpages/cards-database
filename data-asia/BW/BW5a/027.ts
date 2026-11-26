import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ヤブクロン"
	},
	"illustrator": "Tomokazu Komiya",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		568
	],
	"hp": 70,
	"types": [
		"Psychic"
	],
	"stage": "Basic",
	"description": {
		"ja": "不衛生な 場所を 好む。 ゲップのように 吐き出す ガスを 吸い込むと １週間 寝込む。"
	},
	"attacks": [
		{
			"name": {
				"ja": "はたく"
			},
			"cost": [
				"Colorless",
				"Colorless"
			],
			"damage": 20
		},
		{
			"name": {
				"ja": "どくガス"
			},
			"effect": {
				"ja": "相手のバトルポケモンをどくにする。"
			},
			"cost": [
				"Psychic",
				"Colorless",
				"Colorless"
			],
			"damage": 30
		}
	],
	"weaknesses": [
		{
			"type": "Psychic",
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
