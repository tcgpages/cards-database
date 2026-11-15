import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "レアコイル"
	},
	"illustrator": "MAHOU",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		82
	],
	"hp": 80,
	"types": [
		"Lightning"
	],
	"stage": "Stage1",
	"description": {
		"ja": "３匹の コイルが つながって 強くなった 電磁波は 周りの 水分を 乾燥 させるほど。"
	},
	"attacks": [
		{
			"name": {
				"ja": "きんぞくおん"
			},
			"effect": {
				"ja": "相手のバトルポケモンをこんらんにする。"
			},
			"cost": [
				"Colorless"
			]
		},
		{
			"name": {
				"ja": "エレキボール"
			},
			"cost": [
				"Lightning",
				"Colorless"
			],
			"damage": 30
		}
	],
	"weaknesses": [
		{
			"type": "Fighting",
			"value": "×2"
		}
	],
	"retreat": 2,
	"evolveFrom": {
		"ja": "ジバコイル"
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
