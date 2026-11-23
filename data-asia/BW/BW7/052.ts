import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ピクシー"
	},
	"illustrator": "Kagemaru Himeno",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		36
	],
	"hp": 90,
	"types": [
		"Colorless"
	],
	"stage": "Stage1",
	"description": {
		"ja": "１キロ先に 落ちた 針の 音も きこえるほど 耳が いいので 普段は 静かな ところに いる。"
	},
	"abilities": [
		{
			"type": "Ability",
			"name": {
				"ja": "つきのみちびき"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、自分の場のポケモン1匹から進化するカードを、自分の山札から1枚選び、そのポケモンにのせて進化させる（この番、出したばかりのポケモンでも進化できる）。そして山札を切る。この特性は、自分の番に1回使える。"
			}
		}
	],
	"attacks": [
		{
			"name": {
				"ja": "ムーンインパクト"
			},
			"cost": [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			"damage": 50
		}
	],
	"weaknesses": [
		{
			"type": "Fighting",
			"value": "×2"
		}
	],
	"retreat": 1,
	"evolveFrom": {
		"ja": "ピッピ"
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
