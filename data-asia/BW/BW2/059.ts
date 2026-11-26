import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "クリムガン"
	},
	"illustrator": "Masakazu Fukuda",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		621
	],
	"hp": 100,
	"types": [
		"Colorless"
	],
	"stage": "Basic",
	"description": {
		"ja": "狭い 洞穴を 走り回り 獲物を 鋭い ツメで 捕獲。 顔の 皮膚は 岩より 硬い。"
	},
	"abilities": [
		{
			"type": "Ability",
			"name": {
				"ja": "さめはだ"
			},
			"effect": {
				"ja": "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを2個のせる。"
			}
		}
	],
	"attacks": [
		{
			"name": {
				"ja": "わしづかみ"
			},
			"effect": {
				"ja": "次の相手の番、このワザを受けた相手のバトルポケモンは、にげられない。"
			},
			"cost": [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			"damage": 60
		}
	],
	"retreat": 2,
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
