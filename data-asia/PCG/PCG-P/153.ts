import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Naoyo Kimura",
	hp: 50,
	types: [
		"Lightning",
	],
	stage: "Basic",
	dexId: [
		25,
	],
	attacks: [
		{
			name: {
				ja: "ピッカリだま",
			},
			cost: [
				"Lightning",
			],
			damage: 10,
		},
		{
			name: {
				ja: "10まんボルト",
			},
			effect: {
				ja: "自分のエネルギーをすべてトラッシュする。",
			},
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			damage: 50,
		},
	],
	weaknesses: [
		{
			type: "Fighting",
		},
	],
	retreat: 1,
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
