import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "ビリジオン"
	},
	"illustrator": "5ban Graphics",
	"rarity": "Ultra Rare",
	"category": "Pokemon",
	"dexId": [
		640
	],
	"hp": 110,
	"types": [
		"Grass"
	],
	"stage": "Basic",
	"attacks": [
		{
			"name": {
				"ja": "ダブルドロー"
			},
			"effect": {
				"ja": "自分の山札を2枚引く。"
			},
			"cost": [
				"Colorless"
			]
		},
		{
			"name": {
				"ja": "リーフスラッガー"
			},
			"effect": {
				"ja": "次の自分の番、このポケモンが使う「リーフスラッガー」のダメージは「+40」される。"
			},
			"cost": [
				"Grass",
				"Colorless"
			],
			"damage": 40
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
			"type": "holo",
			"stamp": [
				"1st-edition"
			]
		}
	]
}

export default card
