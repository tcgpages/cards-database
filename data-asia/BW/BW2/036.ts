import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "シャンデラ"
	},
	"illustrator": "Naoyo Kimura",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		609
	],
	"hp": 130,
	"types": [
		"Psychic"
	],
	"stage": "Stage2",
	"description": {
		"ja": "魂を 吸い取って 燃やす。 腕の 炎を 揺らして 相手を 催眠状態に する。"
	},
	"abilities": [
		{
			"type": "Ability",
			"name": {
				"ja": "のろいのかげ"
			},
			"effect": {
				"ja": "ダメカン3個を、相手のポケモンに好きなようにのせる。この特性は、このポケモンがバトル場にいるなら、自分の番に1回使える。"
			}
		}
	],
	"attacks": [
		{
			"name": {
				"ja": "あやしいともしび"
			},
			"effect": {
				"ja": "相手のバトルポケモンをやけどとこんらんにする。"
			},
			"cost": [
				"Psychic",
				"Psychic",
				"Colorless"
			],
			"damage": 50
		}
	],
	"weaknesses": [
		{
			"type": "Darkness",
			"value": "×2"
		}
	],
	"retreat": 2,
	"evolveFrom": {
		"ja": "ランプラー"
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
