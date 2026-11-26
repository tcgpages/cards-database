import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "ガマゲロゲ"
	},
	"illustrator": "Masakazu Fukuda",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		537
	],
	"hp": 140,
	"types": [
		"Water"
	],
	"stage": "Stage2",
	"description": {
		"ja": "こぶしの コブを 振動させると パンチの 威力が 倍増する。 一撃で 大岩を 粉砕。"
	},
	"attacks": [
		{
			"name": {
				"ja": "りんしょう"
			},
			"effect": {
				"ja": "ワザ「りんしょう」を持つ自分のポケモンの数×30ダメージ。"
			},
			"cost": [
				"Colorless",
				"Colorless"
			],
			"damage": "30×"
		},
		{
			"name": {
				"ja": "ハイパーボイス"
			},
			"cost": [
				"Water",
				"Water",
				"Colorless"
			],
			"damage": 70
		}
	],
	"weaknesses": [
		{
			"type": "Grass",
			"value": "×2"
		}
	],
	"retreat": 3,
	"evolveFrom": {
		"ja": "ガマガル"
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
