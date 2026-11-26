import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "コドラ"
	},
	"illustrator": "Shigenori Negishi",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		305
	],
	"hp": 90,
	"types": [
		"Metal"
	],
	"stage": "Stage1",
	"description": {
		"ja": "鉄鉱石を 掘り出して 食べる。 鋼の 体を ぶつけ合って 縄張り争いをする 習性。"
	},
	"attacks": [
		{
			"name": {
				"ja": "メタルクロー"
			},
			"cost": [
				"Metal",
				"Colorless"
			],
			"damage": 30
		},
		{
			"name": {
				"ja": "あばれまくる"
			},
			"effect": {
				"ja": "ウラが出るまでコインを投げ続け、オモテの数ぶん、相手の山札を上からトラッシュする。"
			},
			"cost": [
				"Metal",
				"Metal",
				"Colorless"
			],
			"damage": 60
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
			"type": "Psychic",
			"value": "－20"
		}
	],
	"retreat": 3,
	"evolveFrom": {
		"ja": "ココドラ"
	},
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
