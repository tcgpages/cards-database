import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "アメモース",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Kagemaru Himeno",
	hp: 70,
	types: [
		"Grass",
	],
	stage: "Stage1",
	evolveFrom: {
		ja: "アメタマ",
	},
	dexId: [
		284,
	],
	attacks: [
		{
			name: {
				ja: "でんこうせっか",
			},
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージを追加。",
			},
			cost: [
				"Colorless",
			],
			damage: "10+",
		},
		{
			name: {
				ja: "かぜおこし",
			},
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			damage: 50,
		},
	],
	weaknesses: [
		{
			type: "Lightning",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 0,
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
