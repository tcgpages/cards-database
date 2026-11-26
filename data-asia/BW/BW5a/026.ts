import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "シンボラー"
	},
	"illustrator": "Ryo Ueda",
	"rarity": "Rare",
	"category": "Pokemon",
	"dexId": [
		561
	],
	"hp": 90,
	"types": [
		"Psychic"
	],
	"stage": "Basic",
	"description": {
		"ja": "古代都市の 守り神だった。 縄張りに 侵入した 敵を サイコパワーで 攻撃する。"
	},
	"abilities": [
		{
			"type": "Ability",
			"name": {
				"ja": "しんぴのまもり"
			},
			"effect": {
				"ja": "このポケモンは、「ポケモンEX」からワザのダメージや効果を受けない。"
			}
		}
	],
	"attacks": [
		{
			"name": {
				"ja": "サイコキネシス"
			},
			"effect": {
				"ja": "相手のバトルポケモンについているエネルギーの数×10ダメージを追加。"
			},
			"cost": [
				"Psychic",
				"Colorless",
				"Colorless"
			],
			"damage": "50+"
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
