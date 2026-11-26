import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ヤンヤンマ"
	},
	"illustrator": "Yukiko Baba",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		193
	],
	"hp": 70,
	"types": [
		"Grass"
	],
	"stage": "Basic",
	"description": {
		"ja": "ハネを 高速で はためかせて 空中で 停止 しながら 自分の 縄張りを 見張っている。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ふきとばし"
			},
			"effect": {
				"ja": "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］"
			},
			"cost": [
				"Colorless",
				"Colorless"
			],
			"damage": 20
		}
	],
	"weaknesses": [
		{
			"type": "Lightning",
			"value": "×2"
		}
	],
	"resistances": [
		{
			"type": "Fighting",
			"value": "－20"
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
