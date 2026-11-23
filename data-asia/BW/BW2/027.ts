import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "シビルドン"
	},
	"illustrator": "Masakazu Fukuda",
	"rarity": "Rare",
	"category": "Pokemon",
	"dexId": [
		604
	],
	"hp": 140,
	"types": [
		"Lightning"
	],
	"stage": "Stage2",
	"description": {
		"ja": "腕の 力で 海から はい出し 水辺の 獲物に 襲いかかる。 一瞬で 海へ 引きずり込む。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ようかいえき"
			},
			"effect": {
				"ja": "次の相手の番、このワザを受けた相手のバトルポケモンは、にげられない。"
			},
			"cost": [
				"Colorless",
				"Colorless"
			],
			"damage": 30
		},
		{
			"name": {
				"ja": "ワイルドボルト"
			},
			"effect": {
				"ja": "このポケモンにも10ダメージ。"
			},
			"cost": [
				"Lightning",
				"Lightning",
				"Colorless"
			],
			"damage": 90
		}
	],
	"weaknesses": [
		{
			"type": "Fighting",
			"value": "×2"
		}
	],
	"retreat": 3,
	"evolveFrom": {
		"ja": "シビビール"
	},
	"variants": [
		{
			"type": "holo",
			"stamp": [
				"1st-edition"
			]
		}
	]
}

export default card
