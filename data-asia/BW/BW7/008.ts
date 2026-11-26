import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "モロバレル"
	},
	"illustrator": "5ban Graphics",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		591
	],
	"hp": 90,
	"types": [
		"Grass"
	],
	"stage": "Stage1",
	"description": {
		"ja": "両手の かさを 動かし 獲物を 誘う ダンスを 踊る。 じめじめした 場所を 好む。"
	},
	"attacks": [
		{
			"name": {
				"ja": "おどろかす"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、相手の手札からオモテを見ないで3枚選ぶ。その後、そのカードを見てから相手の山札にもどし、山札を切る。"
			},
			"cost": [
				"Colorless"
			]
		},
		{
			"name": {
				"ja": "ミラクルパウダー"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、特殊状態の中から1つを選び、相手のバトルポケモンをその状態にする。"
			},
			"cost": [
				"Grass",
				"Colorless"
			],
			"damage": 30
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
	"retreat": 2,
	"evolveFrom": {
		"ja": "タマゲタケ"
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
