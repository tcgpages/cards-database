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
				ja: "てっぺき",
			},
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、自分はワザによるダメージや効果を受けない。",
			},
			cost: [
				"Metal",
			],
		},
		{
			name: {
				ja: "けたぐり",
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
