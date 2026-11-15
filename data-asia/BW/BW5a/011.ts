import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ホエルコ"
	},
	"illustrator": "Atsuko Nishida",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		320
	],
	"hp": 100,
	"types": [
		"Water"
	],
	"stage": "Basic",
	"description": {
		"ja": "晴れた 日は 砂浜に 上がり ボールのように 弾んで 遊ぶ。 鼻から 水を 吹き上げる。"
	},
	"attacks": [
		{
			"name": {
				"ja": "こもりうた"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、相手のバトルポケモンをねむりにする。"
			},
			"cost": [
				"Colorless"
			]
		},
		{
			"name": {
				"ja": "みずでっぽう"
			},
			"cost": [
				"Water",
				"Colorless",
				"Colorless"
			],
			"damage": 30
		}
	],
	"weaknesses": [
		{
			"type": "Lightning",
			"value": "×2"
		}
	],
	"retreat": 3,
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
