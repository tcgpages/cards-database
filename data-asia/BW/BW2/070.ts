import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "ビクティニ"
	},
	"illustrator": "5ban Graphics",
	"rarity": "Ultra Rare",
	"category": "Pokemon",
	"dexId": [
		494
	],
	"hp": 60,
	"types": [
		"Fire"
	],
	"stage": "Basic",
	"abilities": [
		{
			"type": "Ability",
			"name": {
				"ja": "しょうりのほし"
			},
			"effect": {
				"ja": "自分のポケモンのワザでコインを投げたとき使える。そのコインの結果をすべてなくし、はじめからコインを投げなおす。ビクティニが何匹いても、「しょうりのほし」は自分の番に1回しか使えない。"
			}
		}
	],
	"attacks": [
		{
			"name": {
				"ja": "アシストパワー"
			},
			"effect": {
				"ja": "このポケモンについているエネルギーをすべて、ベンチポケモン1匹につけ替える。"
			},
			"cost": [
				"Fire",
				"Colorless"
			],
			"damage": 30
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
		}
	]
}

export default card
