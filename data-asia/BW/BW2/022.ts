import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "ブルンゲル"
	},
	"illustrator": "Kagemaru Himeno",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		593
	],
	"hp": 110,
	"types": [
		"Water"
	],
	"stage": "Stage1",
	"description": {
		"ja": "ブルンゲルの 住処に 迷い込んだ 船は 沈められて 乗組員の 命は 吸い取られて しまうのだ。"
	},
	"abilities": [
		{
			"type": "Ability",
			"name": {
				"ja": "のろわれボディ"
			},
			"effect": {
				"ja": "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンをこんらんにする。"
			}
		}
	],
	"attacks": [
		{
			"name": {
				"ja": "ハイドロポンプ"
			},
			"effect": {
				"ja": "このポケモンについている水エネルギーの数×20ダメージを追加。"
			},
			"cost": [
				"Colorless",
				"Colorless"
			],
			"damage": "10+"
		}
	],
	"weaknesses": [
		{
			"type": "Lightning",
			"value": "×2"
		}
	],
	"retreat": 3,
	"evolveFrom": {
		"ja": "ブルンゲルex"
	},
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
