import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ガマゲロゲ"
	},
	"illustrator": "kawayoo",
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
		"ja": "頭の コブから 神経を マヒさせる 液体を 飛ばす。 振動で 相手を 苦しめる。"
	},
	"attacks": [
		{
			"name": {
				"ja": "エコーボイス"
			},
			"effect": {
				"ja": "次の自分の番、このポケモンが使う「エコーボイス」のダメージは「+50」される。"
			},
			"cost": [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			"damage": 50
		},
		{
			"name": {
				"ja": "ドレインパンチ"
			},
			"effect": {
				"ja": "このポケモンのHPを「20」回復する。"
			},
			"cost": [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			"damage": 80
		}
	],
	"weaknesses": [
		{
			"type": "Grass",
			"value": "×2"
		}
	],
	"retreat": 2,
	"evolveFrom": {
		"ja": "ガマガル"
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
