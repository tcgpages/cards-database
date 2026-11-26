import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "メタグロス",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Ken Sugimori",
	hp: 100,
	types: [
		"Metal",
	],
	stage: "Stage2",
	evolveFrom: {
		ja: "メタング",
	},
	dexId: [
		376,
	],
	attacks: [
		{
			name: {
				ja: "メタルクロー",
			},
			cost: [
				"Metal",
				"Colorless",
			],
			damage: 30,
		},
		{
			name: {
				ja: "はかいこうせん",
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のエネルギーを1個トラッシュする。",
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			damage: 50,
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
	retreat: 3,
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
