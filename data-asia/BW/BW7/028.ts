import { Card } from "../../../interfaces"
import Set from "../BW7"

const card: Card = {
	set: Set,

	"name": {
		"ja": "ゴルバット"
	},
	"illustrator": "Kyoko Umemoto",
	"rarity": "Uncommon",
	"category": "Pokemon",
	"dexId": [
		42
	],
	"hp": 80,
	"types": [
		"Psychic"
	],
	"stage": "Stage1",
	"description": {
		"ja": "真夜中 活発に 飛び回り ねらいをつけた 獲物に キバを 刺し 死ぬほど 血を 吸いまくる。"
	},
	"attacks": [
		{
			"name": {
				"ja": "スパイラルドレイン"
			},
			"effect": {
				"ja": "このポケモンのHPを「20」回復する。"
			},
			"cost": [
				"Psychic",
				"Colorless"
			],
			"damage": 20
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
	"retreat": 1,
	"evolveFrom": {
		"ja": "クロバットBREAK"
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
