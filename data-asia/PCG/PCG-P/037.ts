import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "キモリ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Yuka Morii",
	hp: 40,
	types: [
		"Grass",
	],
	stage: "Basic",
	dexId: [
		252,
	],
	attacks: [
		{
			name: {
				ja: "しっぽをゆらす",
			},
			effect: {
				ja: "相手をねむりにする。",
			},
			cost: [
				"Grass",
			],
		},
		{
			name: {
				ja: "きりさく",
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			damage: 30,
		},
	],
	weaknesses: [
		{
			type: "Fire",
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30",
		},
	],
	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: [
				"pokemon-center",
			],
		},
	],
}

export default card
