import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "バニプッチ"
	},
	"illustrator": "Atsuko Nishida",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		582
	],
	"hp": 50,
	"types": [
		"Water"
	],
	"stage": "Basic",
	"description": {
		"ja": "朝日の エネルギーを 浴びた つららが ポケモンに なった。 雪に 体を 埋めて 眠る。"
	},
	"attacks": [
		{
			"name": {
				"ja": "つららバリ"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、10ダメージを追加。"
			},
			"cost": [
				"Water"
			],
			"damage": "10+"
		}
	],
	"weaknesses": [
		{
			"type": "Metal",
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
