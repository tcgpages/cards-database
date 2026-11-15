import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "バイバニラ"
	},
	"illustrator": "Kagemaru Himeno",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		584
	],
	"hp": 130,
	"types": [
		"Water"
	],
	"stage": "Stage2",
	"description": {
		"ja": "２つの 頭が 同時に 怒ると ツノから 猛吹雪を 吹き出す。 あたりを 大雪で 埋めてしまう。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ダブルフリーズ"
			},
			"effect": {
				"ja": "コインを2回投げ、オモテの数×40ダメージ。1回でもオモテなら、相手のバトルポケモンをマヒにする。"
			},
			"cost": [
				"Water",
				"Colorless"
			],
			"damage": "40×"
		},
		{
			"name": {
				"ja": "こおりのいぶき"
			},
			"cost": [
				"Water",
				"Water"
			],
			"damage": 60
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
		"ja": "バニリッチ"
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
