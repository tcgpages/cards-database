import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ロゼリア"
	},
	"illustrator": "Suwama Chiaki",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		315
	],
	"hp": 70,
	"types": [
		"Grass"
	],
	"stage": "Basic",
	"description": {
		"ja": "元気な ロゼリアほど 花から いい 香りを 醸し出し かいだ 人を とても リラックスさせる。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ダブルウィップ"
			},
			"effect": {
				"ja": "コインを2回投げ、オモテの数×10ダメージ。"
			},
			"cost": [
				"Colorless"
			],
			"damage": "10×"
		},
		{
			"name": {
				"ja": "くつろぎのかおり"
			},
			"effect": {
				"ja": "このポケモンのHPを「30」回復し、特殊状態もすべて回復する。"
			},
			"cost": [
				"Grass"
			]
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
			"type": "Water",
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
