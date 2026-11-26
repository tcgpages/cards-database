import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "サザンドラ"
	},
	"illustrator": "5ban Graphics",
	"rarity": "Rare",
	"category": "Pokemon",
	"dexId": [
		635
	],
	"hp": 150,
	"types": [
		"Darkness"
	],
	"stage": "Stage2",
	"description": {
		"ja": "両腕の 頭は 脳みそを 持たない。 ３つの 頭で すべてを 食べつくし 破壊してしまう。"
	},
	"abilities": [
		{
			"type": "Ability",
			"name": {
				"ja": "ダークオーラ"
			},
			"effect": {
				"ja": "このポケモンについているエネルギーは、すべて悪タイプになる。"
			}
		}
	],
	"attacks": [
		{
			"name": {
				"ja": "きょうきのやいば"
			},
			"effect": {
				"ja": "相手のベンチポケモンを2匹選び、そのポケモンにも、それぞれ40ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
			},
			"cost": [
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness"
			],
			"damage": 60
		}
	],
	"weaknesses": [
		{
			"type": "Fighting",
			"value": "×2"
		}
	],
	"resistances": [
		{
			"type": "Psychic",
			"value": "－20"
		}
	],
	"retreat": 3,
	"evolveFrom": {
		"ja": "ジヘッド"
	},
	"variants": [
		{
			"type": "holo",
			"stamp": [
				"1st-edition"
			]
		}
	]
}

export default card
