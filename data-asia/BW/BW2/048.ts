import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "コマタナ"
	},
	"illustrator": "Mitsuhiro Arita",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		624
	],
	"hp": 60,
	"types": [
		"Darkness"
	],
	"stage": "Basic",
	"description": {
		"ja": "キリキザンの 命令で 戦う。 獲物に しがみつき 刃を 食い込ませて 痛めつけるのだ。"
	},
	"attacks": [
		{
			"name": {
				"ja": "アイアンヘッド"
			},
			"effect": {
				"ja": "ウラが出るまでコインを投げ続け、オモテの数×10ダメージ。"
			},
			"cost": [
				"Colorless"
			],
			"damage": "10×"
		}
	],
	"weaknesses": [
		{
			"type": "Fighting",
			"value": "×2"
		}
	],
	"resistances": [
		{
			"type": "Psychic",
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
		}
	]
}

export default card
