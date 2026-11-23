import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ルカリオ"
	},
	"illustrator": "Satoshi Shirai",
	"rarity": "Rare",
	"category": "Pokemon",
	"dexId": [
		448
	],
	"hp": 100,
	"types": [
		"Fighting"
	],
	"stage": "Stage1",
	"description": {
		"ja": "あらゆる ものが だす 波動を 読みとることで １キロ先に いる 相手の 気持ちも 理解できる。"
	},
	"abilities": [
		{
			"type": "Ability",
			"name": {
				"ja": "デュアルアーマー"
			},
			"effect": {
				"ja": "このポケモンに鋼エネルギーがついているなら、このポケモンのタイプは、闘と鋼の2つになる。"
			}
		}
	],
	"attacks": [
		{
			"name": {
				"ja": "れっぷうきゃく"
			},
			"effect": {
				"ja": "相手がすでにとったサイドの枚数×30ダメージを追加。"
			},
			"cost": [
				"Fighting",
				"Colorless",
				"Colorless"
			],
			"damage": "60+"
		}
	],
	"weaknesses": [
		{
			"type": "Psychic",
			"value": "×2"
		}
	],
	"retreat": 2,
	"evolveFrom": {
		"ja": "リオル"
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
