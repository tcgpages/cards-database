import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ルンパッパ"
	},
	"illustrator": "match",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		272
	],
	"hp": 130,
	"types": [
		"Water"
	],
	"stage": "Stage2",
	"description": {
		"ja": "陽気な 音楽を 聴くと 体中に 力が みなぎり 踊らずには いられなくなるのだ。"
	},
	"abilities": [
		{
			"type": "Ability",
			"name": {
				"ja": "あめうけざら"
			},
			"effect": {
				"ja": "ポケモンチェックのたび、このポケモンのHPを「20」回復する。"
			}
		}
	],
	"attacks": [
		{
			"name": {
				"ja": "ノリノリダンス"
			},
			"effect": {
				"ja": "のぞむなら、このポケモンについているエネルギーを1個選び、トラッシュしてよい。その場合、相手のバトルポケモンをこんらんにする。"
			},
			"cost": [
				"Water",
				"Water",
				"Colorless"
			],
			"damage": 70
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
		"ja": "ハスブレロ"
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
