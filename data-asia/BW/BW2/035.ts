import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "ランプラー"
	},
	"illustrator": "MAHOU",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		608
	],
	"hp": 80,
	"types": [
		"Psychic"
	],
	"stage": "Stage1",
	"description": {
		"ja": "不吉な ポケモンと 怖がられる。 死者の 魂を 求めて 街中を フラフラと さまよう。"
	},
	"attacks": [
		{
			"name": {
				"ja": "さそうともしび"
			},
			"effect": {
				"ja": "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。"
			},
			"cost": [
				"Colorless"
			]
		},
		{
			"name": {
				"ja": "おにび"
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
			"type": "Darkness",
			"value": "×2"
		}
	],
	"retreat": 1,
	"evolveFrom": {
		"ja": "ヒトモシ"
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
