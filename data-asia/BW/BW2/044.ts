import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "ゴビット"
	},
	"illustrator": "Masakazu Fukuda",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		622
	],
	"hp": 80,
	"types": [
		"Fighting"
	],
	"stage": "Basic",
	"description": {
		"ja": "幻の 古代文明の 科学に よって 生み出された ポケモンと 考えられている。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ばくれつパンチ"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、20ダメージを追加し、相手のバトルポケモンをこんらんにする。"
			},
			"cost": [
				"Fighting",
				"Colorless"
			],
			"damage": "20+"
		}
	],
	"weaknesses": [
		{
			"type": "Water",
			"value": "×2"
		}
	],
	"resistances": [
		{
			"type": "Lightning",
			"value": "－20"
		}
	],
	"retreat": 3,
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
