import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "キルリア"
	},
	"illustrator": "Mizue",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		281
	],
	"hp": 80,
	"types": [
		"Psychic"
	],
	"stage": "Stage1",
	"description": {
		"ja": "トレーナーが 喜ぶと キルリアに エネルギーが 満ちあふれ 楽しそうに くるくると 踊る。"
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
				"Psychic"
			],
			"damage": 20
		}
	],
	"weaknesses": [
		{
			"type": "Psychic",
			"value": "×2"
		}
	],
	"retreat": 1,
	"evolveFrom": {
		"ja": "ラルトス"
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
