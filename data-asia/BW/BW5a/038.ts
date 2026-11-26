import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "アイアント"
	},
	"illustrator": "Mitsuhiro Arita",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		632
	],
	"hp": 70,
	"types": [
		"Metal"
	],
	"stage": "Basic",
	"description": {
		"ja": "山を 掘って 巣穴を 作る。 複雑に 入り組んだ トンネルは アイアントが 作った 迷路だ。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ひろう"
			},
			"effect": {
				"ja": "自分のトラッシュから好きなカードを1枚選び、相手に見せてから、山札の上にもどす。"
			},
			"cost": [
				"Colorless"
			]
		},
		{
			"name": {
				"ja": "アイアンヘッド"
			},
			"effect": {
				"ja": "ウラが出るまでコインを投げ続け、オモテの数×30ダメージ。"
			},
			"cost": [
				"Metal",
				"Colorless"
			],
			"damage": "30×"
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
