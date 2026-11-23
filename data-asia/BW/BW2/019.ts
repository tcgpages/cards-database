import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "バニリッチ"
	},
	"illustrator": "match",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		583
	],
	"hp": 80,
	"types": [
		"Water"
	],
	"stage": "Stage1",
	"description": {
		"ja": "小さい 氷の 粒を たくさん 作り出して 自分の 姿を 敵の 目から 隠すのだ。"
	},
	"attacks": [
		{
			"name": {
				"ja": "れいとうビーム"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			"cost": [
				"Water",
				"Colorless"
			],
			"damage": 20
		},
		{
			"name": {
				"ja": "こおりのいぶき"
			},
			"cost": [
				"Water",
				"Water"
			],
			"damage": 40
		}
	],
	"weaknesses": [
		{
			"type": "Metal",
			"value": "×2"
		}
	],
	"retreat": 2,
	"evolveFrom": {
		"ja": "バニプッチ"
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
