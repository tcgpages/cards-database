import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "バオッキー"
	},
	"illustrator": "Naoki Saito",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		514
	],
	"hp": 90,
	"types": [
		"Fire"
	],
	"stage": "Stage1",
	"description": {
		"ja": "興奮すると 頭や しっぽから 火の粉が 舞いあがって 熱くなる。 なぜか 甘いものが 大好物。"
	},
	"attacks": [
		{
			"name": {
				"ja": "やきこがす"
			},
			"effect": {
				"ja": "相手のバトルポケモンをやけどにする。"
			},
			"cost": [
				"Fire"
			],
			"damage": 20
		},
		{
			"name": {
				"ja": "フレイムブラスト"
			},
			"effect": {
				"ja": "このポケモンについている炎エネルギーの数×20ダメージを追加。"
			},
			"cost": [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			"damage": "40+"
		}
	],
	"weaknesses": [
		{
			"type": "Water",
			"value": "×2"
		}
	],
	"retreat": 2,
	"evolveFrom": {
		"ja": "バオップ"
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
