import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "ギガイアス"
	},
	"illustrator": "Mitsuhiro Arita",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		526
	],
	"hp": 150,
	"types": [
		"Fighting"
	],
	"stage": "Stage2",
	"description": {
		"ja": "体内の コアで エネルギーを 圧縮して 撃ち出す 攻撃は 山を 吹き飛ばす 威力。"
	},
	"attacks": [
		{
			"name": {
				"ja": "コアキャノン"
			},
			"effect": {
				"ja": "相手のポケモンを1匹選び、このポケモンについている闘エネルギーの数×20ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
			},
			"cost": [
				"Fighting"
			]
		},
		{
			"name": {
				"ja": "パワージェム"
			},
			"cost": [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			"damage": 90
		}
	],
	"weaknesses": [
		{
			"type": "Grass",
			"value": "×2"
		}
	],
	"retreat": 4,
	"evolveFrom": {
		"ja": "ガントル"
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
