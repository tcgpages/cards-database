import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "モロバレル"
	},
	"illustrator": "Kagemaru Himeno",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		591
	],
	"hp": 90,
	"types": [
		"Grass"
	],
	"stage": "Stage1",
	"description": {
		"ja": "モンスターボールの カサを 見せつけ 獲物を 誘き寄せようとするが だまされる ポケモンは 少ない。"
	},
	"attacks": [
		{
			"name": {
				"ja": "どくどく"
			},
			"effect": {
				"ja": "相手のバトルポケモンをどくにする。ポケモンチェックのとき、このどくでのせるダメカンの数は2個になる。"
			},
			"cost": [
				"Grass"
			]
		},
		{
			"name": {
				"ja": "のしかかり"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			"cost": [
				"Colorless",
				"Colorless"
			],
			"damage": 30
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
			"type": "Water",
			"value": "－20"
		}
	],
	"retreat": 2,
	"evolveFrom": {
		"ja": "タマゲタケ"
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
