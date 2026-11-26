import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ランクルス"
	},
	"illustrator": "5ban Graphics",
	"rarity": "Secret Rare",
	"category": "Pokemon",
	"dexId": [
		579
	],
	"hp": 90,
	"types": [
		"Psychic"
	],
	"stage": "Stage2",
	"description": {
		"ja": "岩を 握りつぶす 握力の 腕を 操り 戦う。 高い 知能を 持つ ポケモン。"
	},
	"abilities": [
		{
			"type": "Ability",
			"name": {
				"ja": "ダメージスワップ"
			},
			"effect": {
				"ja": "自分のポケモンにのっているダメカンを1個選び、自分の別のポケモンにのせ替える。この特性は、自分の番に何回でも使える。"
			}
		}
	],
	"attacks": [
		{
			"name": {
				"ja": "サイコウェーブ"
			},
			"effect": {
				"ja": "相手のバトルポケモンについているエネルギーの数×10ダメージを追加。"
			},
			"cost": [
				"Psychic",
				"Psychic",
				"Psychic"
			],
			"damage": "30+"
		}
	],
	"weaknesses": [
		{
			"type": "Psychic",
			"value": "×2"
		}
	],
	"retreat": 2,
	"evolveFrom": {
		"ja": "ダブラン"
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
