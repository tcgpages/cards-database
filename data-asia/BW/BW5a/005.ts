import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "アゲハント"
	},
	"illustrator": "Akira Komayama",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		267
	],
	"hp": 120,
	"types": [
		"Grass"
	],
	"stage": "Stage2",
	"description": {
		"ja": "見た目に よらず 攻撃的で 花粉集めの 邪魔を すると 細長い 口を 突き刺してくる。"
	},
	"attacks": [
		{
			"name": {
				"ja": "トリプルエナジー"
			},
			"effect": {
				"ja": "自分の山札から、それぞれちがうタイプの基本エネルギーを3枚選び、自分のポケモンに好きなようにつける。そして山札を切る。"
			},
			"cost": [
				"Grass"
			]
		},
		{
			"name": {
				"ja": "ドレインシャワー"
			},
			"effect": {
				"ja": "自分のベンチポケモン全員のHPを、それぞれ「40」回復する。"
			},
			"cost": [
				"Grass",
				"Colorless",
				"Colorless"
			],
			"damage": 40
		}
	],
	"weaknesses": [
		{
			"type": "Fire",
			"value": "×2"
		}
	],
	"retreat": 1,
	"evolveFrom": {
		"ja": "ドクケイル"
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
