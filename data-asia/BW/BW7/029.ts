import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "クロバット"
	},
	"illustrator": "5ban Graphics",
	"rarity": "Rare",
	"category": "Pokemon",
	"dexId": [
		169
	],
	"hp": 130,
	"types": [
		"Psychic"
	],
	"stage": "Stage2",
	"description": {
		"ja": "４枚に 増えた 羽を 使い さらに 速く 静かに 飛んで 獲物に 気づかれず 忍びよる。"
	},
	"abilities": [
		{
			"type": "Ability",
			"name": {
				"ja": "よるのめ"
			},
			"effect": {
				"ja": "自分の山札を1枚引く。この特性は、自分の番に1回使える。"
			}
		}
	],
	"attacks": [
		{
			"name": {
				"ja": "げきどくのキバ"
			},
			"effect": {
				"ja": "相手のバトルポケモンをどくにする。ポケモンチェックのとき、このどくでのせるダメカンの数は4個になる。"
			},
			"cost": [
				"Psychic",
				"Colorless",
				"Colorless"
			],
			"damage": 40
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
	"retreat": 0,
	"evolveFrom": {
		"ja": "ゴルバット"
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
