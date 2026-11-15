import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "コバルオン"
	},
	"illustrator": "5ban Graphics",
	"rarity": "Ultra Rare",
	"category": "Pokemon",
	"dexId": [
		638
	],
	"hp": 120,
	"types": [
		"Metal"
	],
	"stage": "Basic",
	"attacks": [
		{
			"name": {
				"ja": "エナジープレス"
			},
			"effect": {
				"ja": "相手のバトルポケモンについているエネルギーの数×20ダメージを追加。"
			},
			"cost": [
				"Metal",
				"Colorless"
			],
			"damage": "20+"
		},
		{
			"name": {
				"ja": "アイアンブレイク"
			},
			"effect": {
				"ja": "次の相手の番、このワザを受けた相手のバトルポケモンは、ワザを使えない。"
			},
			"cost": [
				"Metal",
				"Metal",
				"Colorless"
			],
			"damage": 80
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
	"retreat": 2,
	"variants": [
		{
			"type": "holo",
			"stamp": [
				"1st-edition"
			]
		}
	]
}

export default card
