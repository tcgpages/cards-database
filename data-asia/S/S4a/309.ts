import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "マルヤクデV"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare V",
	category: "Pokemon",
	hp: 210,
	types: [
		"Fire"
	],
	stage: "Basic",
	suffix: "V",
	attacks: [
		{
			name: {
				ja: "ねつほうしゃ"
			},
			effect: {
				ja: "のぞむなら、このポケモンについているエネルギーを1個選び、トラッシュする。その場合、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Fire"
			],
			damage: 20
		},
		{
			name: {
				ja: "バーニングトレイン"
			},
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire"
			],
			damage: 180
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
