import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "マユルド"
	},
	"illustrator": "match",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		268
	],
	"hp": 80,
	"types": [
		"Grass"
	],
	"stage": "Stage1",
	"description": {
		"ja": "マユに こもっている あいだに 受けた 攻撃は 進化しても 忘れずに かならず 仕返しする。"
	},
	"attacks": [
		{
			"name": {
				"ja": "からめてひっぱる"
			},
			"effect": {
				"ja": "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。"
			},
			"cost": [
				"Colorless"
			]
		},
		{
			"name": {
				"ja": "スパイラルドレイン"
			},
			"effect": {
				"ja": "このポケモンのHPを「20」回復する。"
			},
			"cost": [
				"Colorless",
				"Colorless"
			],
			"damage": 20
		}
	],
	"weaknesses": [
		{
			"type": "Fire",
			"value": "×2"
		}
	],
	"retreat": 3,
	"evolveFrom": {
		"ja": "ケムッソ"
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
