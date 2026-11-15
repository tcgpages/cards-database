import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "クリムガン"
	},
	"illustrator": "5ban Graphics",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		621
	],
	"hp": 110,
	"types": [
		"Dragon"
	],
	"stage": "Basic",
	"description": {
		"ja": "ドリュウズや イワークが 掘った 狭い トンネルを 走りまわって するどいツメで 獲物を 捕らえる。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ガードプレス"
			},
			"effect": {
				"ja": "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。"
			},
			"cost": [
				"Colorless",
				"Colorless"
			],
			"damage": 20
		},
		{
			"name": {
				"ja": "ドラゴンクロー"
			},
			"cost": [
				"Fire",
				"Fire",
				"Water",
				"Colorless"
			],
			"damage": 90
		}
	],
	"weaknesses": [
		{
			"type": "Dragon",
			"value": "×2"
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
