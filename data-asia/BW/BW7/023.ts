import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "コイル"
	},
	"illustrator": "Shigenori Negishi",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		81
	],
	"hp": 60,
	"types": [
		"Lightning"
	],
	"stage": "Basic",
	"description": {
		"ja": "左右にある ユニットから だす 電磁波で 重力を さえぎって 空に 浮かぶのだ。"
	},
	"attacks": [
		{
			"name": {
				"ja": "きんぞくおん"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、相手のバトルポケモンをこんらんにする。"
			},
			"cost": [
				"Colorless"
			]
		},
		{
			"name": {
				"ja": "エレキボール"
			},
			"cost": [
				"Lightning",
				"Colorless"
			],
			"damage": 20
		}
	],
	"weaknesses": [
		{
			"type": "Fighting",
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
