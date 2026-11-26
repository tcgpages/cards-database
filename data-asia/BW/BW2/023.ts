import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "フリージオ"
	},
	"illustrator": "Masakazu Fukuda",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		615
	],
	"hp": 80,
	"types": [
		"Water"
	],
	"stage": "Basic",
	"description": {
		"ja": "雪雲の 中で 生まれた。 氷の 結晶で できた 鎖で 獲物を 捕まえる。"
	},
	"attacks": [
		{
			"name": {
				"ja": "こごえるかぜ"
			},
			"effect": {
				"ja": "相手のバトルポケモンをねむりにする。"
			},
			"cost": [
				"Water"
			]
		},
		{
			"name": {
				"ja": "こおりのつぶて"
			},
			"effect": {
				"ja": "相手のバトルポケモンが闘タイプなら、40ダメージを追加。"
			},
			"cost": [
				"Water",
				"Colorless"
			],
			"damage": "30+"
		}
	],
	"weaknesses": [
		{
			"type": "Metal",
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
