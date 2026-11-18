import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウVMAX"
	},
	illustrator: "aky CG Works",
	rarity: "Hyper rare",
	category: "Pokemon",
	hp: 310,
	types: [
		"Lightning"
	],
	stage: "VMAX",
	suffix: "VMAX",
	attacks: [
		{
			name: {
				ja: "キョダイボルテッカー"
			},
			effect: {
				ja: "のぞむなら、このポケモンについているエネルギーを、すべてトラッシュする。その場合、150ダメージ追加。"
			},
			cost: [
				"Lightning",
				"Lightning",
				"Lightning"
			],
			damage: "120+"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
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
