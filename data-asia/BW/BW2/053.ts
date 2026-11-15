import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "シュバルゴ"
	},
	"illustrator": "Kouki Saitou",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		589
	],
	"hp": 90,
	"types": [
		"Metal"
	],
	"stage": "Stage1",
	"description": {
		"ja": "チョボマキの 殻を 身につけて 進化した ポケモン。 鋼鉄の よろいが 全身を ガードする。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ガードプレス"
			},
			"effect": {
				"ja": "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。"
			},
			"cost": [
				"Metal",
				"Colorless"
			],
			"damage": 40
		},
		{
			"name": {
				"ja": "ダブルニードル"
			},
			"effect": {
				"ja": "コインを2回投げ、オモテの数×70ダメージ。"
			},
			"cost": [
				"Metal",
				"Colorless",
				"Colorless"
			],
			"damage": "70×"
		}
	],
	"weaknesses": [
		{
			"type": "Fire",
			"value": "×2"
		}
	],
	"resistances": [
		{
			"type": "Psychic",
			"value": "－20"
		}
	],
	"retreat": 3,
	"evolveFrom": {
		"ja": "カブルモ"
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
