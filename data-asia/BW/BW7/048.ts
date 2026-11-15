import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "アイアント"
	},
	"illustrator": "5ban Graphics",
	"rarity": "Common",
	"category": "Pokemon",
	"dexId": [
		632
	],
	"hp": 70,
	"types": [
		"Metal"
	],
	"stage": "Basic",
	"description": {
		"ja": "天敵の クイタランに 対して みんなで 役割分担 しながら 反撃して 巣から 追い払う。"
	},
	"attacks": [
		{
			"name": {
				"ja": "えんぐん"
			},
			"effect": {
				"ja": "自分の山札からポケモンを1枚選び、相手に見せてから、手札に加える。そして山札を切る。"
			},
			"cost": [
				"Colorless"
			]
		},
		{
			"name": {
				"ja": "メタルジェイル"
			},
			"effect": {
				"ja": "次の相手の番、このワザを受けた相手のバトルポケモンは、にげられない。"
			},
			"cost": [
				"Metal",
				"Colorless"
			],
			"damage": 30
		}
	],
	"weaknesses": [
		{
			"type": "Fire",
			"value": "×2"
		}
	],
	"resistances": [
		{
			"type": "Psychic",
			"value": "－20"
		}
	],
	"retreat": 1,
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
