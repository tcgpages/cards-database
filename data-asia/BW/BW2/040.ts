import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "アーケオス"
	},
	"illustrator": "Kouki Saitou",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		567
	],
	"hp": 130,
	"types": [
		"Fighting"
	],
	"stage": "Stage1",
	"description": {
		"ja": "地上で 助走を つけてから 飛び立つ。 仲間と 協力して 獲物を しとめる 知能を 持つ。"
	},
	"abilities": [
		{
			"type": "Ability",
			"name": {
				"ja": "げんしのちから"
			},
			"effect": {
				"ja": "このポケモンがいるかぎり、おたがいのプレイヤーは、手札からポケモンを出して、進化させられない。"
			}
		}
	],
	"attacks": [
		{
			"name": {
				"ja": "いわなだれ"
			},
			"effect": {
				"ja": "相手のベンチポケモンを2匹選び、そのポケモンにも、それぞれ10ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
			},
			"cost": [
				"Fighting",
				"Fighting",
				"Colorless"
			],
			"damage": 60
		}
	],
	"weaknesses": [
		{
			"type": "Grass",
			"value": "×2"
		}
	],
	"retreat": 2,
	"evolveFrom": {
		"ja": "アーケン"
	},
	"variants": [
		{
			"type": "normal",
			"stamp": [
				"1st-edition"
			]
		}
	]
}

export default card
