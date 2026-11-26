import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "クマシュン"
	},
	"illustrator": "MAHOU",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		613
	],
	"hp": 70,
	"types": [
		"Water"
	],
	"stage": "Basic",
	"description": {
		"ja": "鼻水は 健康の バロメータ。 調子が いいと 粘り強くなり 氷の 技の 威力も 増す。"
	},
	"attacks": [
		{
			"name": {
				"ja": "あられ"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、相手のポケモン全員に、それぞれ10ダメージ。[ベンチへのダメージは弱点・抵抗力の計算をしない。]"
			},
			"cost": [
				"Water"
			]
		},
		{
			"name": {
				"ja": "スノーアイス"
			},
			"cost": [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			"damage": 30
		}
	],
	"weaknesses": [
		{
			"type": "Metal",
			"value": "×2"
		}
	],
	"retreat": 2,
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
