import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "デスカーン"
	},
	"illustrator": "Mitsuhiro Arita",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		563
	],
	"hp": 90,
	"types": [
		"Psychic"
	],
	"stage": "Stage1",
	"description": {
		"ja": "近づいた 人間を 飲み込んで ミイラに してしまうという ウワサ。 金塊を 好んで 食べる。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ダメカーン"
			},
			"effect": {
				"ja": "自分のベンチポケモンを1匹選び、のっているダメカンをすべて、相手のバトルポケモンにのせ替える。"
			},
			"cost": [
				"Psychic",
				"Colorless"
			]
		},
		{
			"name": {
				"ja": "まどわす"
			},
			"effect": {
				"ja": "相手のバトルポケモンをこんらんにする。"
			},
			"cost": [
				"Psychic",
				"Colorless",
				"Colorless"
			],
			"damage": 30
		}
	],
	"weaknesses": [
		{
			"type": "Darkness",
			"value": "×2"
		}
	],
	"retreat": 3,
	"evolveFrom": {
		"ja": "デスマス"
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
