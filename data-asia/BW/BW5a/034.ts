import { Card } from "../../../interfaces"
import Set from "../BW5a"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ドンカラス"
	},
	"illustrator": "Shin Nagasawa",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		430
	],
	"hp": 110,
	"types": [
		"Darkness"
	],
	"stage": "Stage1",
	"description": {
		"ja": "ドンカラスが 低い声で 鳴くと すぐさま ヤミカラスが 集まるため 夜を招くもの とも 言われる。"
	},
	"attacks": [
		{
			"name": {
				"ja": "ふきとばし"
			},
			"effect": {
				"ja": "のぞむなら、相手のバトルポケモンをベンチポケモンと入れ替えてよい。［バトル場に出すポケモンは相手が選ぶ。］"
			},
			"cost": [
				"Colorless",
				"Colorless"
			],
			"damage": 30
		},
		{
			"name": {
				"ja": "スナッチダイブ"
			},
			"effect": {
				"ja": "相手の手札からオモテを見ないで1枚選び、トラッシュする。"
			},
			"cost": [
				"Darkness",
				"Colorless",
				"Colorless"
			],
			"damage": 70
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
	"evolveFrom": {
		"ja": "ヤミカラス"
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
