import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "カラサリス"
	},
	"illustrator": "Naoki Saito",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		266
	],
	"hp": 80,
	"types": [
		"Grass"
	],
	"stage": "Stage1",
	"description": {
		"ja": "糸を 木の枝に 巻きつけている。 糸についた 雨水を 飲みながら 進化の ときを 待っている。"
	},
	"attacks": [
		{
			"name": {
				"ja": "かたくなる"
			},
			"effect": {
				"ja": "次の相手の番、このポケモンは「60」以下のワザのダメージを受けない。"
			},
			"cost": [
				"Colorless"
			]
		},
		{
			"name": {
				"ja": "むしくい"
			},
			"cost": [
				"Grass",
				"Colorless",
				"Colorless"
			],
			"damage": 40
		}
	],
	"weaknesses": [
		{
			"type": "Fire",
			"value": "×2"
		}
	],
	"retreat": 3,
	"evolveFrom": {
		"ja": "ケムッソ"
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
