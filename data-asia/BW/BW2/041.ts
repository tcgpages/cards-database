import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "マッギョ"
	},
	"illustrator": "Midori Harada",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		618
	],
	"hp": 90,
	"types": [
		"Fighting"
	],
	"stage": "Basic",
	"description": {
		"ja": "海辺の 泥に 埋まって 獲物を 待ち構える。 獲物が 触ったとき 電気を 出して しびれさせるのだ。"
	},
	"attacks": [
		{
			"name": {
				"ja": "びちびち"
			},
			"effect": {
				"ja": "コインを2回投げ、オモテの数×30ダメージ。"
			},
			"cost": [
				"Lightning",
				"Colorless"
			],
			"damage": "30×"
		},
		{
			"name": {
				"ja": "でんきショック"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			"cost": [
				"Lightning",
				"Lightning",
				"Colorless"
			],
			"damage": 50
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
