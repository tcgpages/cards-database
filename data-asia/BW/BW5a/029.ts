import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ヤジロン"
	},
	"illustrator": "Shigenori Negishi",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		343
	],
	"hp": 60,
	"types": [
		"Fighting"
	],
	"stage": "Basic",
	"description": {
		"ja": "一本足で 回転しながら 移動する。 古代の 遺跡から 見つかった 珍しい ポケモン。"
	},
	"attacks": [
		{
			"name": {
				"ja": "かいてんアタック"
			},
			"cost": [
				"Colorless"
			],
			"damage": 10
		},
		{
			"name": {
				"ja": "ぎゃくかいてん"
			},
			"effect": {
				"ja": "相手は手札をすべて山札にもどし、山札を切る。その後、相手は山札を4枚引く。"
			},
			"cost": [
				"Colorless",
				"Colorless"
			]
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
		},
		{
			"type": "normal"
		}
	]
}

export default card
