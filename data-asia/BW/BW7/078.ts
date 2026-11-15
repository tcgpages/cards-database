import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "カメックス"
	},
	"illustrator": "Ayaka Yoshida",
	"rarity": "Secret Rare",
	"category": "Pokemon",
	"dexId": [
		9
	],
	"hp": 140,
	"types": [
		"Water"
	],
	"stage": "Stage2",
	"description": {
		"ja": "甲羅の ロケット砲から 吹き出す 水流は 分厚い 鉄板も 一発で 貫く 破壊力。"
	},
	"abilities": [
		{
			"type": "Ability",
			"name": {
				"ja": "ばくりゅう"
			},
			"effect": {
				"ja": "自分の手札から水エネルギーを1枚選び、自分のポケモンにつける。この特性は、自分の番に何回でも使える。"
			}
		}
	],
	"attacks": [
		{
			"name": {
				"ja": "ハイドロポンプ"
			},
			"effect": {
				"ja": "このポケモンについている水エネルギーの数×10ダメージを追加。"
			},
			"cost": [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			"damage": "60+"
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
		"ja": "カメール"
	},
	"variants": [
		{
			"type": "holo",
			"stamp": [
				"1st-edition"
			]
		},
		{
			"type": "holo"
		}
	]
}

export default card
