import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "クイタラン"
	},
	"illustrator": "Suwama Chiaki",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		631
	],
	"hp": 90,
	"types": [
		"Fire"
	],
	"stage": "Basic",
	"description": {
		"ja": "しっぽから 取りこんだ 空気を 炎に変えて ベロのように 使い アイアントを 溶かして 食べるぞ。"
	},
	"attacks": [
		{
			"name": {
				"ja": "さそってこがす"
			},
			"effect": {
				"ja": "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンをやけどにする。"
			},
			"cost": [
				"Fire"
			]
		},
		{
			"name": {
				"ja": "ベロベロファイヤー"
			},
			"effect": {
				"ja": "自分の山札を上から4枚トラッシュし、その中の炎エネルギーの枚数×50ダメージ。"
			},
			"cost": [
				"Fire",
				"Fire",
				"Fire"
			],
			"damage": "50×"
		}
	],
	"weaknesses": [
		{
			"type": "Water",
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
