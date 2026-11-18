import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "アギルダー"
	},
	"illustrator": "Kagemaru Himeno",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		617
	],
	"hp": 90,
	"types": [
		"Grass"
	],
	"stage": "Stage1",
	"description": {
		"ja": "重い 殻を 脱いだために 身軽になった。 まるで 忍者のような 身のこなしで 戦う。"
	},
	"attacks": [
		{
			"name": {
				"ja": "アシッドボム"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			"cost": [
				"Colorless"
			],
			"damage": 20
		},
		{
			"name": {
				"ja": "スラッシュダウン"
			},
			"effect": {
				"ja": "次の自分の番、このポケモンは「スラッシュダウン」を使えない。"
			},
			"cost": [
				"Grass"
			],
			"damage": 60
		}
	],
	"weaknesses": [
		{
			"type": "Fire",
			"value": "×2"
		}
	],
	"retreat": 0,
	"evolveFrom": {
		"ja": "チョボマキ"
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
