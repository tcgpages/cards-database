import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "波導のルカリオ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "2005 Pikachu Project",
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
				ja: "みきり",
			},
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
			cost: [
				"Fighting",
			],
		},
		{
			name: {
				ja: "でんこうせっか",
			},
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージを追加。",
			},
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			damage: "30+",
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
