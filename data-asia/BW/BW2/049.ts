import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "キリキザン"
	},
	"illustrator": "Kouki Saitou",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		625
	],
	"hp": 90,
	"types": [
		"Darkness"
	],
	"stage": "Stage1",
	"description": {
		"ja": "大勢の コマタナを 従えて 獲物を 群れで 追いつめる。 とどめは キリキザンが 刺す。"
	},
	"attacks": [
		{
			"name": {
				"ja": "とどめをさす"
			},
			"effect": {
				"ja": "ダメージを与えるとき、すでに相手のバトルポケモンにダメカンがのっているなら、50ダメージを追加。"
			},
			"cost": [
				"Darkness"
			],
			"damage": "20+"
		},
		{
			"name": {
				"ja": "つじぎり"
			},
			"effect": {
				"ja": "このポケモンをベンチポケモンと入れ替える。"
			},
			"cost": [
				"Darkness",
				"Colorless"
			],
			"damage": 30
		}
	],
	"weaknesses": [
		{
			"type": "Fighting",
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
	"evolveFrom": {
		"ja": "コマタナ"
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
