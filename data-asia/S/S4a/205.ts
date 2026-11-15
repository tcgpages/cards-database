import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ゴリランダー"
	},
	illustrator: "Ryuta Fuse",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 170,
	types: [
		"Grass"
	],
	stage: "Stage2",
	dexId: [
		812
	],
	description: {
		ja: "特別な 切り株の パワーを ドラミングで コントロール。 根っこを 操って 戦う。"
	},
	abilities: [
		{
			name: {
				ja: "ボルテージビート"
			},
			effect: {
				ja: "自分の番に1回使える。自分の山札から草エネルギーを2枚まで選び、自分のポケモン1匹につける。そして山札を切る。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "ぶちかます"
			},
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless"
			],
			damage: 140
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 3,
	regulationMark: "D",
	variants: [
		{
			type: "holo",
			languages: [
				"ja"
			]
		}
	]
}

export default card
