import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ゴウカザル"
	},
	"illustrator": "5ban Graphics",
	"rarity": "Rare",
	"category": "Pokemon",
	"dexId": [
		392
	],
	"hp": 130,
	"types": [
		"Fire"
	],
	"stage": "Stage2",
	"description": {
		"ja": "手足に 炎を まとった 独特の 格闘わざを 使い どんな 相手にも 立ち向かう。"
	},
	"attacks": [
		{
			"name": {
				"ja": "いちゃもん"
			},
			"effect": {
				"ja": "相手のバトルポケモンが持っているワザを1つ選ぶ。次の相手の番、このワザを受けた相手のバトルポケモンは、選ばれたワザを使えない。"
			},
			"cost": [
				"Colorless"
			],
			"damage": 30
		},
		{
			"name": {
				"ja": "ヘルファイヤー"
			},
			"effect": {
				"ja": "このポケモンについているエネルギーをすべてトラッシュする。"
			},
			"cost": [
				"Fire",
				"Colorless"
			],
			"damage": 120
		}
	],
	"weaknesses": [
		{
			"type": "Water",
			"value": "×2"
		}
	],
	"retreat": 0,
	"evolveFrom": {
		"ja": "モウカザル"
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
