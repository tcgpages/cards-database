import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "シェイミEX"
	},
	illustrator: "Ayaka Yoshida",
	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: [
		"Colorless"
	],
	stage: "Basic",
	suffix: "EX",
	abilities: [
		{
			name: {
				ja: "セットアップ"
			},
			effect: {
				ja: "この特性は、このカードを手札からベンチに出したとき、1回使える。自分の手札が6枚になるように、山札を引く。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "スカイリターン"
			},
			effect: {
				ja: "このポケモンと、ついているすべてのカードを、手札にもどす。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
