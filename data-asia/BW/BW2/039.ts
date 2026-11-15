import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "アーケン"
	},
	"illustrator": "Kagemaru Himeno",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		566
	],
	"hp": 80,
	"types": [
		"Fighting"
	],
	"stage": "RESTORED",
	"description": {
		"ja": "とりポケモンの 祖先と 言われる。 飛ぶことは できず 枝から 枝へ 飛び移り 生活していたらしい。"
	},
	"attacks": [
		{
			"name": {
				"ja": "いわおとし"
			},
			"cost": [
				"Fighting"
			],
			"damage": 20
		},
		{
			"name": {
				"ja": "アクロバット"
			},
			"effect": {
				"ja": "コインを2回投げ、オモテの数×20ダメージを追加。"
			},
			"cost": [
				"Colorless",
				"Colorless"
			],
			"damage": "20+"
		}
	],
	"weaknesses": [
		{
			"type": "Grass",
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
		}
	]
}

export default card
