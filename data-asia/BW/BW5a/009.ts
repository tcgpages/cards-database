import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ロコン"
	},
	"illustrator": "MAHOU",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		37
	],
	"hp": 60,
	"types": [
		"Fire"
	],
	"stage": "Basic",
	"description": {
		"ja": "炎の 玉を 操る。 成長すると ６本の しっぽは 先が 分かれて さらに 増える。"
	},
	"attacks": [
		{
			"name": {
				"ja": "こがす"
			},
			"effect": {
				"ja": "相手のバトルポケモンをやけどにする。"
			},
			"cost": [
				"Fire"
			]
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
