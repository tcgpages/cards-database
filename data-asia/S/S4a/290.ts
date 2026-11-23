import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ダイオウドウ"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 190,
	types: [
		"Metal"
	],
	evolveFrom: {
		ja: "ゾウドウ"
	},
	stage: "Stage1",
	dexId: [
		879
	],
	description: {
		ja: "緑の皮膚は 水にも 強い。 昔 ほかの土地から やってきて 人と いっしょに 働いた。"
	},
	abilities: [
		{
			name: {
				ja: "こうきんスキン"
			},
			effect: {
				ja: "このポケモンは特殊状態にならない。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "リベンジスタンプ"
			},
			effect: {
				ja: "自分のベンチポケモンにダメカンがのっているなら、120ダメージ追加。"
			},
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless"
			],
			damage: "120+"
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		}
	],
	retreat: 4,
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
