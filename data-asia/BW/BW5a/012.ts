import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ホエルオー"
	},
	"illustrator": "match",
	"rarity": "Rare",
	"category": "Pokemon",
	"dexId": [
		321
	],
	"hp": 200,
	"types": [
		"Water"
	],
	"stage": "Stage1",
	"description": {
		"ja": "一番 大きい ポケモン。 息つぎせずに ３０００メートルの 深さまで 潜ることが できる。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ウォーターキャノン"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、このポケモンについている水エネルギーの数×30ダメージ。"
			},
			"cost": [
				"Water"
			],
			"damage": "30×"
		},
		{
			"name": {
				"ja": "おおなみ"
			},
			"effect": {
				"ja": "次の自分の番、このポケモンは「おおなみ」を使えない。"
			},
			"cost": [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			"damage": 80
		}
	],
	"weaknesses": [
		{
			"type": "Lightning",
			"value": "×2"
		}
	],
	"retreat": 4,
	"evolveFrom": {
		"ja": "ホエルオーex"
	},
	"variants": [
		{
			"type": "holo",
			"stamp": [
				"1st-edition"
			]
		},
		{
			"type": "holo"
		}
	]
}

export default card
