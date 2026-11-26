import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "コバルオンEX"
	},
	"illustrator": "Eske Yoshinob",
	"rarity": "Rare",
	"category": "Pokemon",
	"dexId": [
		638
	],
	"hp": 180,
	"types": [
		"Metal"
	],
	"stage": "Basic",
	"suffix": "EX",
	"attacks": [
		{
			"name": {
				"ja": "ホーリーエッジ"
			},
			"effect": {
				"ja": "相手のバトルポケモンについている特殊エネルギーを1個選び、トラッシュする。"
			},
			"cost": [
				"Metal"
			],
			"damage": 30
		},
		{
			"name": {
				"ja": "はがねのだんがん"
			},
			"effect": {
				"ja": "このワザのダメージは、弱点・抵抗力と、相手のバトルポケモンにかかっている効果の計算をしない。"
			},
			"cost": [
				"Metal",
				"Metal",
				"Colorless"
			],
			"damage": 100
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
			"type": "Psychic",
			"value": "－20"
		}
	],
	"retreat": 2,
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
