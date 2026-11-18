import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "ウルガモス"
	},
	"illustrator": "Mitsuhiro Arita",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		637
	],
	"hp": 110,
	"types": [
		"Fire"
	],
	"stage": "Stage1",
	"description": {
		"ja": "火山灰で 地上が 真っ暗に なったとき ウルガモスの 炎が 太陽の 代わりに なったという。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ほのおのまい"
			},
			"effect": {
				"ja": "自分のトラッシュから基本エネルギーを1枚選び、自分のポケモンにつける。"
			},
			"cost": [
				"Fire"
			],
			"damage": 30
		},
		{
			"name": {
				"ja": "ねっぷう"
			},
			"effect": {
				"ja": "相手のバトルポケモンをやけどにする。"
			},
			"cost": [
				"Fire",
				"Colorless",
				"Colorless"
			],
			"damage": 60
		}
	],
	"weaknesses": [
		{
			"type": "Water",
			"value": "×2"
		}
	],
	"retreat": 1,
	"evolveFrom": {
		"ja": "ウルガモスGX"
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
