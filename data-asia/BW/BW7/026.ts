import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ロトム"
	},
	"illustrator": "5ban Graphics",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		479
	],
	"hp": 60,
	"types": [
		"Lightning"
	],
	"stage": "Basic",
	"description": {
		"ja": "電気のような 体は 一部の 機械に 入り込むことが できる。 そして その体で いたずらする。"
	},
	"attacks": [
		{
			"name": {
				"ja": "エレキボーナス"
			},
			"effect": {
				"ja": "自分の手札から雷エネルギーを1枚選び、トラッシュする。その後、自分の山札を3枚引く。"
			},
			"cost": [
				"Colorless"
			]
		},
		{
			"name": {
				"ja": "ポルターガイスト"
			},
			"effect": {
				"ja": "相手の手札を見て、その中にあるトレーナーズの枚数×20ダメージ。"
			},
			"cost": [
				"Lightning",
				"Colorless"
			],
			"damage": "20×"
		}
	],
	"weaknesses": [
		{
			"type": "Fighting",
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
		},
		{
			"type": "normal"
		}
	]
}

export default card
