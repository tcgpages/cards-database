import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "アバゴーラ"
	},
	"illustrator": "match",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		565
	],
	"hp": 140,
	"types": [
		"Water"
	],
	"stage": "Stage1",
	"description": {
		"ja": "海と 陸地で 生活する。 張り手で タンカーの 船底に 穴を 開ける パワーの 持ち主。"
	},
	"abilities": [
		{
			"type": "Ability",
			"name": {
				"ja": "ハードロック"
			},
			"effect": {
				"ja": "このポケモンがワザのダメージを受けるとき、自分はコインを1回投げる。オモテなら、このポケモンが受けるダメージは「-50」される。"
			}
		}
	],
	"attacks": [
		{
			"name": {
				"ja": "かみくだく"
			},
			"effect": {
				"ja": "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			"cost": [
				"Water",
				"Water",
				"Colorless",
				"Colorless"
			],
			"damage": 80
		}
	],
	"weaknesses": [
		{
			"type": "Grass",
			"value": "×2"
		}
	],
	"retreat": 4,
	"evolveFrom": {
		"ja": "プロトーガ"
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
