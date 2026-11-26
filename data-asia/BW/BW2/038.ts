import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "ローブシン"
	},
	"illustrator": "Kouki Saitou",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		534
	],
	"hp": 140,
	"types": [
		"Fighting"
	],
	"stage": "Stage2",
	"description": {
		"ja": "つえ 代わりの コンクリートの 柱を 筋力を 使わず 自在に 振り回す 技を 持つ。"
	},
	"attacks": [
		{
			"name": {
				"ja": "なしくずし"
			},
			"effect": {
				"ja": "このワザのダメージは、相手のバトルポケモンにかかっている効果の計算をしない。"
			},
			"cost": [
				"Fighting"
			],
			"damage": 40
		},
		{
			"name": {
				"ja": "ふりまわす"
			},
			"effect": {
				"ja": "コインを2回投げ、オモテの数×30ダメージを追加。"
			},
			"cost": [
				"Fighting",
				"Fighting",
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
	"retreat": 3,
	"evolveFrom": {
		"ja": "ドテッコツ"
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
