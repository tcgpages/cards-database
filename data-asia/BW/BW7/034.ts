import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "エルレイド"
	},
	"illustrator": "kawayoo",
	"rarity": "Rare",
	"category": "Pokemon",
	"dexId": [
		475
	],
	"hp": 140,
	"types": [
		"Psychic"
	],
	"stage": "Stage2",
	"description": {
		"ja": "だれかを 守ろうと したとき ひじを伸ばし 刀のように 変化 させて 激しく 戦う。"
	},
	"attacks": [
		{
			"name": {
				"ja": "パワフルストーム"
			},
			"effect": {
				"ja": "自分の場のポケモンについているエネルギーの合計×20ダメージ。"
			},
			"cost": [
				"Colorless",
				"Colorless"
			],
			"damage": "20×"
		},
		{
			"name": {
				"ja": "こうそくづき"
			},
			"effect": {
				"ja": "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］"
			},
			"cost": [
				"Psychic",
				"Colorless",
				"Colorless"
			],
			"damage": 80
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
		"ja": "キルリア"
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
