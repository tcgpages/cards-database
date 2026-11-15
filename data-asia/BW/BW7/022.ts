import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ツンベアー"
	},
	"illustrator": "5ban Graphics",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		614
	],
	"hp": 130,
	"types": [
		"Water"
	],
	"stage": "Stage1",
	"description": {
		"ja": "北の 冷たい 海を 好む。 口から 吐きだした 息を凍らせ 海の上に 道をつくり 歩く。"
	},
	"attacks": [
		{
			"name": {
				"ja": "パワーレイジ"
			},
			"effect": {
				"ja": "このポケモンにのっているダメカンの数×20ダメージ。"
			},
			"cost": [
				"Water",
				"Colorless"
			],
			"damage": "20×"
		},
		{
			"name": {
				"ja": "ひょうざんおとし"
			},
			"effect": {
				"ja": "相手の山札を上から1枚トラッシュする。"
			},
			"cost": [
				"Water",
				"Water",
				"Colorless"
			],
			"damage": 90
		}
	],
	"weaknesses": [
		{
			"type": "Metal",
			"value": "×2"
		}
	],
	"retreat": 4,
	"evolveFrom": {
		"ja": "クマシュン"
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
