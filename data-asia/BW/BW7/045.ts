import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "レパルダス"
	},
	"illustrator": "5ban Graphics",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		510
	],
	"hp": 80,
	"types": [
		"Darkness"
	],
	"stage": "Stage1",
	"description": {
		"ja": "美しい スタイルは 全身の 発達した 筋肉の おかげ。 音もたてずに 夜を 駆けぬける。"
	},
	"attacks": [
		{
			"name": {
				"ja": "サイレントクロー"
			},
			"effect": {
				"ja": "相手の手札を見て、その中から「サポート」を1枚選び、トラッシュする。その後、そのカードの効果を、このワザの効果として使う。"
			},
			"cost": [
				"Colorless"
			]
		},
		{
			"name": {
				"ja": "ねこだまし"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			"cost": [
				"Darkness",
				"Colorless"
			],
			"damage": 30
		}
	],
	"weaknesses": [
		{
			"type": "Fighting",
			"value": "×2"
		}
	],
	"resistances": [
		{
			"type": "Psychic",
			"value": "－20"
		}
	],
	"retreat": 1,
	"evolveFrom": {
		"ja": "チョロネコ"
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
