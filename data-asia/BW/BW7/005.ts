import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "チェリム"
	},
	"illustrator": "Kagemaru Himeno",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		421
	],
	"hp": 70,
	"types": [
		"Grass"
	],
	"stage": "Stage1",
	"description": {
		"ja": "強い 日差しを 感じとると 閉ざしていた 花びらを 広げ 全身で 日光を 浴びる。"
	},
	"abilities": [
		{
			"type": "Ability",
			"name": {
				"ja": "おてんきヒール"
			},
			"effect": {
				"ja": "草エネルギーがついている自分の場のポケモンを1匹選び、HPを「20」回復する。この特性は、自分の番に1回使える。"
			}
		}
	],
	"attacks": [
		{
			"name": {
				"ja": "つつきまわす"
			},
			"effect": {
				"ja": "コインを2回投げ、オモテの数×20ダメージを追加。"
			},
			"cost": [
				"Grass",
				"Colorless"
			],
			"damage": "20+"
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
			"type": "Water",
			"value": "－20"
		}
	],
	"retreat": 1,
	"evolveFrom": {
		"ja": "チェリンボ"
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
