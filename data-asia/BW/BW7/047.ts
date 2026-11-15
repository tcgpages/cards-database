import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ズルズキン"
	},
	"illustrator": "5ban Graphics",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		560
	],
	"hp": 90,
	"types": [
		"Darkness"
	],
	"stage": "Stage1",
	"description": {
		"ja": "脱皮した 皮を ずりあげて ダメージを 減らしつつ キック！ とさかが 大きいほど 偉そうだ。"
	},
	"attacks": [
		{
			"name": {
				"ja": "けりとばす"
			},
			"effect": {
				"ja": "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］"
			},
			"cost": [
				"Darkness",
				"Colorless"
			],
			"damage": 30
		},
		{
			"name": {
				"ja": "きょうかヘッド"
			},
			"effect": {
				"ja": "このポケモンに「ポケモンのどうぐ」がついているなら、50ダメージを追加。"
			},
			"cost": [
				"Darkness",
				"Darkness",
				"Colorless"
			],
			"damage": "50+"
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
		"ja": "メガズルズキンex"
	},
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
