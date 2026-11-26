import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ワタシラガV"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare V",
	category: "Pokemon",
	hp: 180,
	types: [
		"Grass"
	],
	dexId: [
		830
	],
	stage: "Basic",
	suffix: "V",
	abilities: [
		{
			name: {
				ja: "ハッピーマッチ"
			},
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分のトラッシュからサポートを1枚選び、相手に見せて、手札に加える。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "まいあがる"
			},
			effect: {
				ja: "のぞむなら、このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 50
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 1,
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
