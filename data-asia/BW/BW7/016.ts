import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "フリーザーEX"
	},
	"illustrator": "Toyste Beach",
	"rarity": "Rare",
	"category": "Pokemon",
	"dexId": [
		144
	],
	"hp": 170,
	"types": [
		"Water"
	],
	"stage": "Basic",
	"suffix": "EX",
	"attacks": [
		{
			"name": {
				"ja": "ふぶき"
			},
			"effect": {
				"ja": "相手のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
			},
			"cost": [
				"Water",
				"Colorless",
				"Colorless"
			],
			"damage": 60
		},
		{
			"name": {
				"ja": "フロストプリズン"
			},
			"effect": {
				"ja": "このポケモンに「プラズマエネルギー」がついているなら、相手のバトルポケモンをマヒにする。"
			},
			"cost": [
				"Water",
				"Water",
				"Colorless",
				"Colorless"
			],
			"damage": 80
		}
	],
	"weaknesses": [
		{
			"type": "Metal",
			"value": "×2"
		}
	],
	"resistances": [
		{
			"type": "Fighting",
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
		},
		{
			"type": "holo"
		}
	]
}

export default card
