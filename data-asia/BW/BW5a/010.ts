import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "キュウコン"
	},
	"illustrator": "Hideaki Hakozaki",
	"rarity": "Rare",
	"category": "Pokemon",
	"dexId": [
		38
	],
	"hp": 90,
	"types": [
		"Fire"
	],
	"stage": "Stage1",
	"description": {
		"ja": "９本の しっぽには 神秘的な 力が 宿っていると 伝わる。 １０００年 生き続けるらしい。"
	},
	"abilities": [
		{
			"type": "Ability",
			"name": {
				"ja": "かがやくまなざし"
			},
			"effect": {
				"ja": "この特性は、このカードを手札から出して進化させたとき、1回使える。相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。"
			}
		}
	],
	"attacks": [
		{
			"name": {
				"ja": "たたりび"
			},
			"effect": {
				"ja": "相手のバトルポケモンが受けている特殊状態の数×50ダメージを追加。"
			},
			"cost": [
				"Fire"
			],
			"damage": "20+"
		}
	],
	"weaknesses": [
		{
			"type": "Water",
			"value": "×2"
		}
	],
	"retreat": 1,
	"evolveFrom": {
		"ja": "ロコン"
	},
	"variants": [
		{
			"type": "holo",
			"stamp": [
				"1st-edition"
			]
		},
		{
			"type": "holo"
		}
	]
}

export default card
