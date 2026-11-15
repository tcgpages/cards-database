import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ルギアEX"
	},
	"illustrator": "Toyste Beach",
	"rarity": "Rare",
	"category": "Pokemon",
	"dexId": [
		249
	],
	"hp": 180,
	"types": [
		"Colorless"
	],
	"stage": "Basic",
	"suffix": "EX",
	"abilities": [
		{
			"type": "Ability",
			"name": {
				"ja": "オーバーフロー"
			},
			"effect": {
				"ja": "このポケモンがワザのダメージで、相手のポケモンをきぜつさせたなら、自分がサイドをとるとき、さらにサイドを1枚とる。"
			}
		}
	],
	"attacks": [
		{
			"name": {
				"ja": "プラズマゲイル"
			},
			"effect": {
				"ja": "このポケモンについている「プラズマエネルギー」を1個選び、トラッシュする。トラッシュできないなら、このワザは失敗。"
			},
			"cost": [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			"damage": 120
		}
	],
	"weaknesses": [
		{
			"type": "Lightning",
			"value": "×2"
		}
	],
	"resistances": [
		{
			"type": "Fighting",
			"value": "－20"
		}
	],
	"retreat": 2,
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
