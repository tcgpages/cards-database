import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "デスマス"
	},
	"illustrator": "Midori Harada",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		562
	],
	"hp": 60,
	"types": [
		"Psychic"
	],
	"stage": "Basic",
	"description": {
		"ja": "持っている マスクは デスマスが 人間だった ときの 顔。 たまに 見つめては 泣いている。"
	},
	"attacks": [
		{
			"name": {
				"ja": "まどわす"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、相手のバトルポケモンをこんらんにする。"
			},
			"cost": [
				"Psychic"
			],
			"damage": 10
		}
	],
	"weaknesses": [
		{
			"type": "Darkness",
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
		}
	]
}

export default card
