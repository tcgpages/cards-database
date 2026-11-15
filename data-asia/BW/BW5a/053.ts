import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ギラティナEX"
	},
	"illustrator": "5ban Graphics",
	"rarity": "Ultra Rare",
	"category": "Pokemon",
	"dexId": [
		487
	],
	"hp": 180,
	"types": [
		"Dragon"
	],
	"stage": "Basic",
	"suffix": "EX",
	"attacks": [
		{
			"name": {
				"ja": "ひきさく"
			},
			"effect": {
				"ja": "このワザのダメージは、相手のバトルポケモンにかかっている効果の計算をしない。"
			},
			"cost": [
				"Grass",
				"Psychic",
				"Colorless"
			],
			"damage": 90
		},
		{
			"name": {
				"ja": "りゅうのはどう"
			},
			"effect": {
				"ja": "自分の山札を上から3枚トラッシュする。"
			},
			"cost": [
				"Grass",
				"Psychic",
				"Colorless",
				"Colorless"
			],
			"damage": 130
		}
	],
	"weaknesses": [
		{
			"type": "Dragon",
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
