import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ハヤシガメ"
	},
	"illustrator": "Sumiyoshi Kizuki",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		388
	],
	"hp": 100,
	"types": [
		"Grass"
	],
	"stage": "Stage1",
	"description": {
		"ja": "きれいな 水が わき出る 場所を 知っていて 仲間の ポケモンを 背中に 乗せて そこまで 運ぶ。"
	},
	"attacks": [
		{
			"name": {
				"ja": "はねとばす"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、20ダメージを追加。"
			},
			"cost": [
				"Grass",
				"Colorless",
				"Colorless"
			],
			"damage": "40+"
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
			"type": "Water",
			"value": "－20"
		}
	],
	"retreat": 3,
	"evolveFrom": {
		"ja": "ナエトル"
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
