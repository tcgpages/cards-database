import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "オノノクス"
	},
	"illustrator": "Kouki Saitou",
	"rarity": "Rare",
	"category": "Pokemon",
	"dexId": [
		612
	],
	"hp": 140,
	"types": [
		"Colorless"
	],
	"stage": "Stage2",
	"description": {
		"ja": "優しい 性格だが 縄張りを 荒らす 者には 容赦しない。 鉄を 切る キバで 挑みかかる。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ダブルチョップ"
			},
			"effect": {
				"ja": "コインを2回投げ、オモテの数×50ダメージ。"
			},
			"cost": [
				"Colorless",
				"Colorless"
			],
			"damage": "50×"
		},
		{
			"name": {
				"ja": "ギガインパクト"
			},
			"effect": {
				"ja": "次の自分の番、このポケモンはワザを使えない。"
			},
			"cost": [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			"damage": 120
		}
	],
	"retreat": 2,
	"evolveFrom": {
		"ja": "オノンド"
	},
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
