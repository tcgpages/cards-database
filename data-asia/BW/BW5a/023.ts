import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ドクケイル"
	},
	"illustrator": "Kagemaru Himeno",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		269
	],
	"hp": 130,
	"types": [
		"Psychic"
	],
	"stage": "Stage2",
	"description": {
		"ja": "羽ばたくたびに 毒の粉が 舞う。 夜の あいだ 街路樹の 葉っぱを 食い散らかすことも ある。"
	},
	"attacks": [
		{
			"name": {
				"ja": "きけんなりんぷん"
			},
			"effect": {
				"ja": "相手のバトルポケモンをどくとやけどとねむりにする。"
			},
			"cost": [
				"Psychic"
			]
		},
		{
			"name": {
				"ja": "つばめがえし"
			},
			"effect": {
				"ja": "コインを1回投げオモテなら、30ダメージを追加。"
			},
			"cost": [
				"Psychic",
				"Colorless",
				"Colorless"
			],
			"damage": "50+"
		}
	],
	"weaknesses": [
		{
			"type": "Psychic",
			"value": "×2"
		}
	],
	"retreat": 1,
	"evolveFrom": {
		"ja": "マユルド"
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
