import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ダストダス"
	},
	"illustrator": "kawayoo",
	"rarity": "Rare",
	"category": "Pokemon",
	"dexId": [
		569
	],
	"hp": 100,
	"types": [
		"Psychic"
	],
	"stage": "Stage1",
	"description": {
		"ja": "左腕で 相手を 絞めつけて 口から 吐き出す 悪臭の 毒ガスで とどめを 刺すのだ。"
	},
	"abilities": [
		{
			"type": "Ability",
			"name": {
				"ja": "ダストオキシン"
			},
			"effect": {
				"ja": "このポケモンに「ポケモンのどうぐ」がついているなら、おたがいの場・手札・トラッシュのカードに書かれている特性（「ダストオキシン」をのぞく）は、すべてなくなる。"
			}
		}
	],
	"attacks": [
		{
			"name": {
				"ja": "ヘドロなげ"
			},
			"cost": [
				"Psychic",
				"Psychic",
				"Colorless"
			],
			"damage": 60
		}
	],
	"weaknesses": [
		{
			"type": "Psychic",
			"value": "×2"
		}
	],
	"retreat": 3,
	"evolveFrom": {
		"ja": "ヤブクロン"
	},
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
