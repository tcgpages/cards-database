import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ヤブクロン"
	},
	"illustrator": "Midori Harada",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		568
	],
	"hp": 70,
	"types": [
		"Psychic"
	],
	"stage": "Basic",
	"description": {
		"ja": "さらなる ゴミを 求めて ポイ捨てをする 人を つけまわす。 いつも 毒ガスを 吐きだしている。"
	},
	"attacks": [
		{
			"name": {
				"ja": "どうぐおとし"
			},
			"effect": {
				"ja": "おたがいの場のポケモンについている「ポケモンのどうぐ」の合計×20ダメージ。"
			},
			"cost": [
				"Psychic",
				"Colorless"
			],
			"damage": "20×"
		}
	],
	"weaknesses": [
		{
			"type": "Psychic",
			"value": "×2"
		}
	],
	"retreat": 2,
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
