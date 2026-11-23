import { Card } from "../../../interfaces"
import Set from "../BW2"

const card: Card = {
	set: Set,
	"name": {
		"ja": "オーベム"
	},
	"illustrator": "Kagemaru Himeno",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		606
	],
	"hp": 80,
	"types": [
		"Psychic"
	],
	"stage": "Stage1",
	"description": {
		"ja": "サイコパワーで 相手の 脳みそを 操り 記憶する 映像を 違う ものに 書き換えてしまう。"
	},
	"attacks": [
		{
			"name": {
				"ja": "シンクロノイズ"
			},
			"effect": {
				"ja": "相手のバトルポケモンと同じタイプの、相手のベンチポケモン全員にも、それぞれ20ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
			},
			"cost": [
				"Psychic"
			],
			"damage": 20
		},
		{
			"name": {
				"ja": "サイコショット"
			},
			"cost": [
				"Psychic",
				"Colorless"
			],
			"damage": 40
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
		"ja": "リグレー"
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
