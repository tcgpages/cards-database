import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "オーロットBREAK"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 160,
	types: [
		"Psychic"
	],
	dexId: [
		709
	],
	evolveFrom: {
		ja: "オーロット"
	},
	stage: "BREAK",
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
	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st-edition"]
		}
	]
}

export default card
