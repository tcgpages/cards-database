import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "チョロネコ"
	},
	"illustrator": "Masakazu Fukuda",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		509
	],
	"hp": 50,
	"types": [
		"Darkness"
	],
	"stage": "Basic",
	"description": {
		"ja": "かわいらしい 仕草で 油断させ 大事な ものを 盗むのは 人の 困った 様子を みたいから。"
	},
	"attacks": [
		{
			"name": {
				"ja": "さぐる"
			},
			"effect": {
				"ja": "相手の手札を見る。"
			},
			"cost": [
				"Colorless"
			]
		},
		{
			"name": {
				"ja": "ツメをだす"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、10ダメージを追加。"
			},
			"cost": [
				"Darkness",
				"Colorless"
			],
			"damage": "20+"
		}
	],
	"weaknesses": [
		{
			"type": "Fighting",
			"value": "×2"
		}
	],
	"resistances": [
		{
			"type": "Psychic",
			"value": "－20"
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
