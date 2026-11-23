import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ワタシラガV"
	},
	rarity: "Double rare",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 180,
	types: [
		"Grass"
	],
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ハッピーマッチ"
			},
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分のトラッシュからサポートを1枚選び、相手に見せて、手札に加える。"
			}
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
	suffix: "V",
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
			type: "holo"
		}
	],
	dexId: [
		830
	]
}

export default card
