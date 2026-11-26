import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "波導のルカリオ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Kouki Saitou",
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
				ja: "いかくのはどう",
			},
			effect: {
				ja: "相手が「たねポケモン」なら、相手の持っているワザを1つ選ぶ。次の相手の番、このワザを受けた相手は、そのワザを使うことができない。",
			},
			cost: [
				"Metal",
			],
			damage: 10,
		},
		{
			name: {
				ja: "かみつく",
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
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: [
				"mcdonalds",
			],
		},
	],
}

export default card
