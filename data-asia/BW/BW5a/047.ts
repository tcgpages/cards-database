import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "タブンネ"
	},
	"illustrator": "Tomokazu Komiya",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		531
	],
	"hp": 90,
	"types": [
		"Colorless"
	],
	"stage": "Basic",
	"description": {
		"ja": "けたはずれの 聴力を 持つ。 かすかな 音で まわりの 様子を レーダーのように キャッチする。"
	},
	"attacks": [
		{
			"name": {
				"ja": "めざましビーム"
			},
			"effect": {
				"ja": "相手のバトルポケモンの特殊状態をすべて回復する。"
			},
			"cost": [
				"Colorless",
				"Colorless"
			],
			"damage": 40
		},
		{
			"name": {
				"ja": "ドレインビンタ"
			},
			"effect": {
				"ja": "このポケモンのHPを「30」回復する。"
			},
			"cost": [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			"damage": 60
		}
	],
	"weaknesses": [
		{
			"type": "Fighting",
			"value": "×2"
		}
	],
	"retreat": 2,
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
