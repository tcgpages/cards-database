import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "ヒトモシ"
	},
	"illustrator": "Masakazu Fukuda",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		607
	],
	"hp": 50,
	"types": [
		"Psychic"
	],
	"stage": "Basic",
	"description": {
		"ja": "ヒトモシの 灯す 明かりは 人や ポケモンの 生命力を 吸い取って 燃えているのだ。"
	},
	"attacks": [
		{
			"name": {
				"ja": "やきこがす"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、相手のバトルポケモンをやけどにする。"
			},
			"cost": [
				"Colorless",
				"Colorless"
			],
			"damage": 20
		}
	],
	"weaknesses": [
		{
			"type": "Darkness",
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
