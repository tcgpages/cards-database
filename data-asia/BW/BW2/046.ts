import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "テラキオン"
	},
	"illustrator": "5ban Graphics",
	"rarity": "Rare",
	"category": "Pokemon",
	"dexId": [
		639
	],
	"hp": 130,
	"types": [
		"Fighting"
	],
	"stage": "Basic",
	"description": {
		"ja": "巨大な 城壁を 一撃で 突破するほどの 突進力。 伝説で 語られる ポケモン。"
	},
	"attacks": [
		{
			"name": {
				"ja": "かたきうち"
			},
			"effect": {
				"ja": "前の相手の番に、ワザのダメージで、自分のポケモンがきぜつしていたなら、60ダメージを追加。"
			},
			"cost": [
				"Fighting",
				"Colorless"
			],
			"damage": "30+"
		},
		{
			"name": {
				"ja": "ランドクラッシュ"
			},
			"cost": [
				"Fighting",
				"Fighting",
				"Colorless"
			],
			"damage": 90
		}
	],
	"weaknesses": [
		{
			"type": "Grass",
			"value": "×2"
		}
	],
	"retreat": 4,
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
