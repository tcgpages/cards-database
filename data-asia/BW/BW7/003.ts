import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ドダイトス"
	},
	"illustrator": "5ban Graphics",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		389
	],
	"hp": 150,
	"types": [
		"Grass"
	],
	"stage": "Stage2",
	"description": {
		"ja": "ドダイトスの 背中で 生まれて ドダイトスの 背中で 一生を 全うする ポケモンも いる。"
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
				"Grass",
				"Colorless",
				"Colorless"
			],
			"damage": 60
		},
		{
			"name": {
				"ja": "ランブルストンプ"
			},
			"effect": {
				"ja": "ウラが出るまでコインを投げ続け、オモテの数×20ダメージを追加。"
			},
			"cost": [
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			"damage": "80+"
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
	"retreat": 4,
	"evolveFrom": {
		"ja": "ドダイトスex"
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
