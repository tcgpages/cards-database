import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "シビビール"
	},
	"illustrator": "MAHOU",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		603
	],
	"hp": 90,
	"types": [
		"Lightning"
	],
	"stage": "Stage1",
	"description": {
		"ja": "丸い 模様が 発電 器官。 相手に 巻きついてから 模様を 押しつけて 電気を 流すのだ。"
	},
	"abilities": [
		{
			"type": "Ability",
			"name": {
				"ja": "エレキダイナモ"
			},
			"effect": {
				"ja": "自分のトラッシュから雷エネルギーを1枚選び、自分のベンチポケモンにつける。この特性は、自分の番に1回使える。"
			}
		}
	],
	"attacks": [
		{
			"name": {
				"ja": "ライトニングボール"
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
			"type": "Fighting",
			"value": "×2"
		}
	],
	"retreat": 2,
	"evolveFrom": {
		"ja": "シビルドン"
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
