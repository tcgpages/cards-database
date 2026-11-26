import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "タマゲタケ"
	},
	"illustrator": "Mitsuhiro Arita",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		590
	],
	"hp": 40,
	"types": [
		"Grass"
	],
	"stage": "Basic",
	"description": {
		"ja": "モンスターボール そっくりの 模様で ポケモンを 誘いこみ 毒の胞子を 吹きかけてくる。"
	},
	"attacks": [
		{
			"name": {
				"ja": "おどろかす"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、相手の手札からオモテを見ないで1枚選ぶ。その後、そのカードを見てから相手の山札にもどし、山札を切る。"
			},
			"cost": [
				"Colorless"
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
