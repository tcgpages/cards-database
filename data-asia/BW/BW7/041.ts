import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ドンファン"
	},
	"illustrator": "Shin Nagasawa",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		232
	],
	"hp": 130,
	"types": [
		"Fighting"
	],
	"stage": "Stage1",
	"description": {
		"ja": "体を 丸めて 回転しながら 突進する 攻撃。 一撃で 民家を バラバラに 吹き飛ばす。"
	},
	"attacks": [
		{
			"name": {
				"ja": "スピニングターン"
			},
			"effect": {
				"ja": "このポケモンをベンチポケモンと入れ替える。"
			},
			"cost": [
				"Fighting"
			],
			"damage": 40
		},
		{
			"name": {
				"ja": "ぶちこわす"
			},
			"effect": {
				"ja": "場に「スタジアム」が出ているなら、60ダメージを追加。その後、その「スタジアム」をトラッシュする。"
			},
			"cost": [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless"
			],
			"damage": "80+"
		}
	],
	"weaknesses": [
		{
			"type": "Water",
			"value": "×2"
		}
	],
	"resistances": [
		{
			"type": "Lightning",
			"value": "－20"
		}
	],
	"retreat": 4,
	"evolveFrom": {
		"ja": "ゴマゾウ"
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
