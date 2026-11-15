import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "デンリュウ"
	},
	"illustrator": "Hajime Kusajima",
	"rarity": "Rare",
	"category": "Pokemon",
	"dexId": [
		181
	],
	"hp": 140,
	"types": [
		"Lightning"
	],
	"stage": "Stage2",
	"description": {
		"ja": "しっぽの 先が 光り輝く。 昔の 人たちは その 明かりを 使って 合図を 送りあった。"
	},
	"abilities": [
		{
			"type": "Ability",
			"name": {
				"ja": "でんじウォール"
			},
			"effect": {
				"ja": "このポケモンがバトル場にいるかぎり、相手は手札からエネルギーをポケモンにつけるたび、そのポケモンにダメカンを3個のせる。"
			}
		}
	],
	"attacks": [
		{
			"name": {
				"ja": "エレキバレット"
			},
			"effect": {
				"ja": "相手のベンチポケモンを1匹選び、そのポケモンにも20ダメージ。[ベンチへのダメージは弱点・抵抗力の計算をしない。]"
			},
			"cost": [
				"Lightning",
				"Colorless",
				"Colorless"
			],
			"damage": 70
		}
	],
	"weaknesses": [
		{
			"type": "Fighting",
			"value": "×2"
		}
	],
	"retreat": 2,
	"evolveFrom": {
		"ja": "デンリュウGX"
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
