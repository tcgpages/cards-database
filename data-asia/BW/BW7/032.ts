import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ラルトス"
	},
	"illustrator": "Kanako Eo",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		280
	],
	"hp": 60,
	"types": [
		"Psychic"
	],
	"stage": "Basic",
	"description": {
		"ja": "赤いツノで 人や ポケモンの 温かな 気持ちを キャッチすると 全身が ほのかに 熱くなる。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ねんりき"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			"cost": [
				"Colorless"
			]
		}
	],
	"weaknesses": [
		{
			"type": "Psychic",
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
