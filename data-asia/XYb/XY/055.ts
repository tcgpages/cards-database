import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "オーロットBREAK"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 160,
	types: [
		"Psychic"
	],
	stage: "BREAK",
	suffix: "BREAK",
	attacks: [
		{
			name: {
				ja: "サイレントフィアー"
			},
			effect: {
				ja: "相手のポケモン全員に、ダメカンをそれぞれ3個ずつのせる。"
			},
			cost: [
				"Psychic",
				"Colorless"
			]
		}
	],
	retreat: 0,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
