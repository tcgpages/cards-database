import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "ゴルーグ"
	},
	"illustrator": "Kouki Saitou",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		623
	],
	"hp": 130,
	"types": [
		"Fighting"
	],
	"stage": "Stage1",
	"description": {
		"ja": "ゴルーグを 作った 古代人から 人や ポケモンを 守るように 命令されていると 言われている。"
	},
	"attacks": [
		{
			"name": {
				"ja": "アームハンマー"
			},
			"effect": {
				"ja": "相手の山札を上から1枚トラッシュする。"
			},
			"cost": [
				"Fighting",
				"Fighting",
				"Colorless"
			],
			"damage": 60
		},
		{
			"name": {
				"ja": "ハリケーンパンチ"
			},
			"effect": {
				"ja": "コインを4回投げオモテの数×50ダメージ。"
			},
			"cost": [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless"
			],
			"damage": "50×"
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
		"ja": "メガゴルーグex"
	},
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
