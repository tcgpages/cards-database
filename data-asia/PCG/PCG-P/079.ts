import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "波導のルカリオ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Mitsuhiro Arita",
	hp: 70,
	types: [
		"Metal",
	],
	stage: "Basic",
	dexId: [
		448,
	],
	attacks: [
		{
			name: {
				ja: "きあいだめ",
			},
			effect: {
				ja: "次の自分の番、自分が使う「とびひざげり」のダメージは「70」になる。",
			},
			cost: [
				"Colorless",
				"Colorless",
			],
		},
		{
			name: {
				ja: "とびひざげり",
			},
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			damage: 40,
		},
	],
	weaknesses: [
		{
			type: "Fire",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
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
