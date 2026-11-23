import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "オトスパス"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 130,
	types: [
		"Fighting"
	],
	evolveFrom: {
		ja: "タタッコ"
	},
	stage: "Stage1",
	dexId: [
		853
	],
	description: {
		ja: "全身が 筋肉の 塊。 触手を 使って 繰りだす 絞め技の 威力は 凄まじい。"
	},
	attacks: [
		{
			name: {
				ja: "たこがため"
			},
			effect: {
				ja: "このワザを受けたポケモンは、ワザを使うためのエネルギーが無エネルギー2個ぶん多くなり、にげられない。この効果は、この「オトスパス」がバトル場をはなれるまで続き、重ならない。"
			},
			cost: [
				"Fighting",
				"Fighting"
			]
		},
		{
			name: {
				ja: "ハードスイング"
			},
			effect: {
				ja: "このワザのダメージは抵抗力を計算しない。"
			},
			cost: [
				"Fighting",
				"Fighting",
				"Colorless"
			],
			damage: 130
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 2,
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
