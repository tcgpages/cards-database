import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "トゲチック"
	},
	"illustrator": "Akira Komayama",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		176
	],
	"hp": 80,
	"types": [
		"Colorless"
	],
	"stage": "Stage1",
	"description": {
		"ja": "幸せを 分け与えるため 心優しい 人を 捜し求め 世界中を 飛び回っている。"
	},
	"attacks": [
		{
			"name": {
				"ja": "てんしのキッス"
			},
			"effect": {
				"ja": "相手は山札を1枚引く。"
			},
			"cost": [
				"Colorless"
			],
			"damage": 30
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
	"evolveFrom": {
		"ja": "トゲキッス"
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
