import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "マタドガス"
	},
	"illustrator": "5ban Graphics",
	"rarity": "Rare",
	"category": "Pokemon",
	"dexId": [
		110
	],
	"hp": 100,
	"types": [
		"Psychic"
	],
	"stage": "Stage1",
	"description": {
		"ja": "ゴミからでる 毒ガスを 吸いこみ 体内で 混ぜ合わせ さらに 強烈な 臭いを まきちらす。"
	},
	"abilities": [
		{
			"type": "Ability",
			"name": {
				"ja": "ゆうばく"
			},
			"effect": {
				"ja": "このポケモンが、相手のポケモンからワザのダメージを受けてきぜつしたとき、相手の山札を上から3枚トラッシュする。"
			}
		}
	],
	"attacks": [
		{
			"name": {
				"ja": "ワイドスモッグ"
			},
			"effect": {
				"ja": "相手のポケモン全員に、それぞれ20ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
			},
			"cost": [
				"Psychic",
				"Colorless"
			]
		}
	],
	"weaknesses": [
		{
			"type": "Psychic",
			"value": "×2"
		}
	],
	"retreat": 2,
	"evolveFrom": {
		"ja": "ドガース"
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
