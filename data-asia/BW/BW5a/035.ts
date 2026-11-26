import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ココドラ"
	},
	"illustrator": "Sumiyoshi Kizuki",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		304
	],
	"hp": 60,
	"types": [
		"Metal"
	],
	"stage": "Basic",
	"description": {
		"ja": "普段は 山奥で 暮らしているが お腹が すくと ふもとに 現われ 線路や 車を 食べてしまう。"
	},
	"attacks": [
		{
			"name": {
				"ja": "とっしん"
			},
			"effect": {
				"ja": "このポケモンにも10ダメージ。"
			},
			"cost": [
				"Metal",
				"Colorless"
			],
			"damage": 30
		}
	],
	"weaknesses": [
		{
			"type": "Fire",
			"value": "×2"
		}
	],
	"resistances": [
		{
			"type": "Psychic",
			"value": "－20"
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
