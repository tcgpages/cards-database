import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ガマガル"
	},
	"illustrator": "Miki Tanaka",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		536
	],
	"hp": 80,
	"types": [
		"Water"
	],
	"stage": "Stage1",
	"description": {
		"ja": "頭の コブを 振動させると 水中が 波立つ だけでなく 地面も 地震のように 揺れる。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ちょうおんぱ"
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
				"ja": "ハイパーボイス"
			},
			"cost": [
				"Water",
				"Colorless",
				"Colorless"
			],
			"damage": 50
		}
	],
	"weaknesses": [
		{
			"type": "Grass",
			"value": "×2"
		}
	],
	"retreat": 1,
	"evolveFrom": {
		"ja": "ガマゲロゲ"
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
