import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "トゲキッス"
	},
	"illustrator": "Shin Nagasawa",
	"rarity": "Rare",
	"category": "Pokemon",
	"dexId": [
		468
	],
	"hp": 140,
	"types": [
		"Colorless"
	],
	"stage": "Stage2",
	"description": {
		"ja": "お互いの 存在を 認め合い 無駄に 争わない 人のために 様々な 恵みを 分け与える。"
	},
	"abilities": [
		{
			"type": "Ability",
			"name": {
				"ja": "ブライトヴェール"
			},
			"effect": {
				"ja": "このポケモンがバトル場にいるかぎり、相手が手札から「グッズ」を出して使ったとき、自分のポケモン全員は、その効果を受けない。"
			}
		}
	],
	"attacks": [
		{
			"name": {
				"ja": "おんがえし"
			},
			"effect": {
				"ja": "自分の手札が6枚になるように、山札を引く。"
			},
			"cost": [
				"Colorless"
			],
			"damage": 30
		}
	],
	"weaknesses": [
		{
			"type": "Lightning",
			"value": "×2"
		}
	],
	"resistances": [
		{
			"type": "Fighting",
			"value": "－20"
		}
	],
	"retreat": 1,
	"evolveFrom": {
		"ja": "トゲチック"
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
