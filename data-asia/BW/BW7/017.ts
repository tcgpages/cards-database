import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ハスボー"
	},
	"illustrator": "Midori Harada",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		270
	],
	"hp": 60,
	"types": [
		"Water"
	],
	"stage": "Basic",
	"description": {
		"ja": "水草に そっくりな ポケモン。 泳げない ポケモンを 葉っぱに 乗せて 向こう岸まで 運ぶ。"
	},
	"attacks": [
		{
			"name": {
				"ja": "バブルこうせん"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			"cost": [
				"Water",
				"Colorless"
			],
			"damage": 20
		}
	],
	"weaknesses": [
		{
			"type": "Lightning",
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
