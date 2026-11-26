import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ケムッソ"
	},
	"illustrator": "Kouki Saitou",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		265
	],
	"hp": 60,
	"types": [
		"Grass"
	],
	"stage": "Basic",
	"description": {
		"ja": "とりポケモンに よく ねらわれるが おしりの トゲから 毒を出し 必死になって 抵抗する。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ねむけどく"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、相手のバトルポケモンをどくとねむりにする。"
			},
			"cost": [
				"Colorless"
			]
		}
	],
	"weaknesses": [
		{
			"type": "Fire",
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
