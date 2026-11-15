import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "テラキオンEX"
	},
	"illustrator": "Eske Yoshinob",
	"rarity": "Rare",
	"category": "Pokemon",
	"dexId": [
		639
	],
	"hp": 180,
	"types": [
		"Fighting"
	],
	"stage": "Basic",
	"suffix": "EX",
	"attacks": [
		{
			"name": {
				"ja": "がんせきおとし"
			},
			"effect": {
				"ja": "このワザのダメージは抵抗力の計算をしない。"
			},
			"cost": [
				"Fighting",
				"Colorless"
			],
			"damage": 50
		},
		{
			"name": {
				"ja": "パンプスマッシュ"
			},
			"effect": {
				"ja": "自分の手札から基本エネルギーを2枚選び、ベンチポケモンに好きなようにつける。"
			},
			"cost": [
				"Fighting",
				"Fighting",
				"Colorless"
			],
			"damage": 90
		}
	],
	"weaknesses": [
		{
			"type": "Grass",
			"value": "×2"
		}
	],
	"retreat": 3,
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
