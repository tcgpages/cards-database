import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "トゲピー"
	},
	"illustrator": "Kanako Eo",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		175
	],
	"hp": 40,
	"types": [
		"Colorless"
	],
	"stage": "Basic",
	"description": {
		"ja": "みんなの 感じた 優しさや うれしさを 幸せに 変えている。 殻の中は 幸せ ばかりだ。"
	},
	"attacks": [
		{
			"name": {
				"ja": "あくび"
			},
			"effect": {
				"ja": "相手のバトルポケモンをねむりにする。"
			},
			"cost": [
				"Colorless"
			]
		}
	],
	"weaknesses": [
		{
			"type": "Fighting",
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
