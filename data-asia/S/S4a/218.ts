import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "マルヤクデ"
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 130,
	types: [
		"Fire"
	],
	evolveFrom: {
		ja: "ヤクデ"
	},
	stage: "Stage1",
	dexId: [
		851
	],
	description: {
		ja: "発熱時の 体温は およそ ８００度。 体を 鞭のように しならせて 跳びかかってくるぞ。"
	},
	attacks: [
		{
			name: {
				ja: "つらなるほのお"
			},
			effect: {
				ja: "このポケモンについている炎エネルギーの数ぶん、相手の山札を上からトラッシュする。"
			},
			cost: [
				"Fire"
			]
		},
		{
			name: {
				ja: "やきこがす"
			},
			effect: {
				ja: "相手のバトルポケモンをやけどにする。"
			},
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 110
		}
	],
	weaknesses: [
		{
			type: "Water",
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
