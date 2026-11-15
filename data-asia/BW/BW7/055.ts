import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "カビゴン"
	},
	"illustrator": "5ban Graphics",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		143
	],
	"hp": 130,
	"types": [
		"Colorless"
	],
	"stage": "Basic",
	"description": {
		"ja": "満腹になると 指すら 動かすのが 面倒に なるので お腹に 乗っても 大丈夫。"
	},
	"abilities": [
		{
			"type": "Ability",
			"name": {
				"ja": "とおせんぼ"
			},
			"effect": {
				"ja": "このポケモンがバトル場にいるかぎり、相手のバトルポケモンは、にげられない。"
			}
		}
	],
	"attacks": [
		{
			"name": {
				"ja": "チームインパクト"
			},
			"effect": {
				"ja": "自分の場にいる「プラズマ団」のポケモンの数×30ダメージ。"
			},
			"cost": [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			"damage": "30×"
		}
	],
	"weaknesses": [
		{
			"type": "Fighting",
			"value": "×2"
		}
	],
	"retreat": 4,
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
