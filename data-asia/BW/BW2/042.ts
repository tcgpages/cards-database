import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "コジョフー"
	},
	"illustrator": "match",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		619
	],
	"hp": 50,
	"types": [
		"Fighting"
	],
	"stage": "Basic",
	"description": {
		"ja": "流れるような 連続 攻撃を 繰り出して 敵を 圧倒する。 鋭い ツメで 敵を 切り裂く。"
	},
	"attacks": [
		{
			"name": {
				"ja": "はたく"
			},
			"cost": [
				"Colorless"
			],
			"damage": 10
		},
		{
			"name": {
				"ja": "とびひざげり"
			},
			"cost": [
				"Fighting",
				"Fighting"
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
		}
	]
}

export default card
