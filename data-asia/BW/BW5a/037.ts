import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ボスゴドラ"
	},
	"illustrator": "Masakazu Fukuda",
	"rarity": "Rare",
	"category": "Pokemon",
	"dexId": [
		306
	],
	"hp": 140,
	"types": [
		"Metal"
	],
	"stage": "Stage2",
	"description": {
		"ja": "鋼の ツノで 硬い 岩盤を 突き崩しながら 食料の 鉄を 探して トンネルを 掘る。"
	},
	"abilities": [
		{
			"type": "Ability",
			"name": {
				"ja": "やまおろし"
			},
			"effect": {
				"ja": "この特性は、このカードを手札から出して進化させたとき、1回使える。相手の山札を上から3枚トラッシュする。"
			}
		}
	],
	"attacks": [
		{
			"name": {
				"ja": "ギガホーン"
			},
			"effect": {
				"ja": "コインを2回投げ、すべてウラなら、このワザは失敗。"
			},
			"cost": [
				"Metal",
				"Metal",
				"Colorless"
			],
			"damage": 90
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
	"retreat": 4,
	"evolveFrom": {
		"ja": "コドラ"
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
