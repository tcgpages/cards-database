import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ジバコイル"
	},
	"illustrator": "5ban Graphics",
	"rarity": "Rare",
	"category": "Pokemon",
	"dexId": [
		462
	],
	"hp": 140,
	"types": [
		"Lightning"
	],
	"stage": "Stage2",
	"description": {
		"ja": "強すぎる 磁力を だして ジバコイル同士 引き寄せあって まったく 動けなくなったりする。"
	},
	"abilities": [
		{
			"type": "Ability",
			"name": {
				"ja": "ダブルブレイン"
			},
			"effect": {
				"ja": "このポケモンがいるかぎり、自分の番に、自分が使える「サポート」の枚数は2枚になる。"
			}
		}
	],
	"attacks": [
		{
			"name": {
				"ja": "ジャイロボール"
			},
			"effect": {
				"ja": "このポケモンをベンチポケモンと入れ替える。その後、相手は相手自身のバトルポケモンをベンチポケモンと入れ替える。"
			},
			"cost": [
				"Lightning",
				"Lightning",
				"Colorless"
			],
			"damage": 80
		}
	],
	"weaknesses": [
		{
			"type": "Fighting",
			"value": "×2"
		}
	],
	"retreat": 3,
	"evolveFrom": {
		"ja": "ジバコイルex"
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
