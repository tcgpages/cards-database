import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "リグレー"
	},
	"illustrator": "Mitsuhiro Arita",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		605
	],
	"hp": 60,
	"types": [
		"Psychic"
	],
	"stage": "Basic",
	"description": {
		"ja": "５０年前 ＵＦＯが 墜落したと うわさされる 砂漠から やってきたと いわれる。"
	},
	"attacks": [
		{
			"name": {
				"ja": "リフレクター"
			},
			"effect": {
				"ja": "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。"
			},
			"cost": [
				"Colorless"
			]
		},
		{
			"name": {
				"ja": "スマッシュパンチ"
			},
			"effect": {
				"ja": "コインを1回投げウラなら、このワザは失敗。"
			},
			"cost": [
				"Psychic",
				"Colorless"
			],
			"damage": 30
		}
	],
	"weaknesses": [
		{
			"type": "Psychic",
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
