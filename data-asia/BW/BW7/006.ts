import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "マラカッチ"
	},
	"illustrator": "Shigenori Negishi",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		556
	],
	"hp": 90,
	"types": [
		"Grass"
	],
	"stage": "Basic",
	"description": {
		"ja": "リズミカルに 体を 揺すると マラカスに 似た 音が 鳴り響き 驚いた ポケモンは 逃げだす。"
	},
	"attacks": [
		{
			"name": {
				"ja": "げんわくダンス"
			},
			"effect": {
				"ja": "相手のバトルポケモンをこんらんにする。"
			},
			"cost": [
				"Grass"
			],
			"damage": 10
		},
		{
			"name": {
				"ja": "おそいかかる"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、30ダメージを追加。"
			},
			"cost": [
				"Grass",
				"Colorless"
			],
			"damage": "20+"
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
			"type": "Water",
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
