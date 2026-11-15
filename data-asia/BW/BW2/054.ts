import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "アイアント"
	},
	"illustrator": "Masakazu Fukuda",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		632
	],
	"hp": 70,
	"types": [
		"Metal"
	],
	"stage": "Basic",
	"description": {
		"ja": "鋼の よろいを 身にまとう。 天敵の クイタランの 攻撃を 集団で 防ぎ 反撃する。"
	},
	"attacks": [
		{
			"name": {
				"ja": "くいあらす"
			},
			"effect": {
				"ja": "自分の場にいる「アイアント」の数ぶん、相手の山札を上からトラッシュする。"
			},
			"cost": [
				"Metal"
			]
		},
		{
			"name": {
				"ja": "はさむ"
			},
			"cost": [
				"Colorless",
				"Colorless"
			],
			"damage": 30
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
