import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "モウカザル"
	},
	"illustrator": "Masakazu Fukuda",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		391
	],
	"hp": 80,
	"types": [
		"Fire"
	],
	"stage": "Stage1",
	"description": {
		"ja": "しっぽの 炎の 勢いを うまく コントロールして 自分の 得意な 間合いで 戦うのだ。"
	},
	"attacks": [
		{
			"name": {
				"ja": "おたけび"
			},
			"effect": {
				"ja": "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］"
			},
			"cost": [
				"Colorless"
			]
		},
		{
			"name": {
				"ja": "ファイヤーテール"
			},
			"effect": {
				"ja": "このポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			"cost": [
				"Fire",
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
	"retreat": 1,
	"evolveFrom": {
		"ja": "ゴウカザル"
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
