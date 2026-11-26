import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ビクティニEX"
	},
	"illustrator": "Ryo Ueda",
	"rarity": "Ultra Rare",
	"category": "Pokemon",
	"dexId": [
		494
	],
	"hp": 110,
	"types": [
		"Fire"
	],
	"stage": "Basic",
	"suffix": "EX",
	"attacks": [
		{
			"name": {
				"ja": "エナジーターボ"
			},
			"effect": {
				"ja": "自分の山札から基本エネルギーを2枚選び、ベンチポケモンに好きなようにつける。そして山札を切る。"
			},
			"cost": [
				"Fire"
			]
		},
		{
			"name": {
				"ja": "ライジングバーン"
			},
			"effect": {
				"ja": "相手のバトルポケモンが「ポケモンEX」なら、50ダメージを追加。"
			},
			"cost": [
				"Fire",
				"Colorless",
				"Colorless"
			],
			"damage": "50+"
		}
	],
	"weaknesses": [
		{
			"type": "Water",
			"value": "×2"
		}
	],
	"retreat": 1,
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
