import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ギラティナ"
	},
	"illustrator": "5ban Graphics",
	"rarity": "Rare",
	"category": "Pokemon",
	"dexId": [
		487
	],
	"hp": 130,
	"types": [
		"Psychic"
	],
	"stage": "Basic",
	"description": {
		"ja": "暴れ者 ゆえ 追い出されたが 破れた世界と 言われる 場所で 静かに 元の世界を 見ていた。"
	},
	"attacks": [
		{
			"name": {
				"ja": "たたりめ"
			},
			"effect": {
				"ja": "相手のバトルポケモンが特殊状態なら、50ダメージを追加。"
			},
			"cost": [
				"Psychic",
				"Colorless",
				"Colorless"
			],
			"damage": "50+"
		},
		{
			"name": {
				"ja": "シャドークロー"
			},
			"effect": {
				"ja": "相手の手札からオモテを見ないで1枚選び、トラッシュする。"
			},
			"cost": [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless"
			],
			"damage": 90
		}
	],
	"weaknesses": [
		{
			"type": "Darkness",
			"value": "×2"
		}
	],
	"retreat": 3,
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
