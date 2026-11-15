import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "オタマロ"
	},
	"illustrator": "Midori Harada",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		535
	],
	"hp": 50,
	"types": [
		"Water"
	],
	"stage": "Basic",
	"description": {
		"ja": "ほほを 振動させて 人には 聞こえない 音波を 出す。 音波の リズムで 会話する。"
	},
	"attacks": [
		{
			"name": {
				"ja": "あわ"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			"cost": [
				"Water"
			],
			"damage": 10
		}
	],
	"weaknesses": [
		{
			"type": "Grass",
			"value": "×2"
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
