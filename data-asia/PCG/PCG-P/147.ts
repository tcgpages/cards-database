import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "蒼海のマナフィ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Mitsuhiro Arita",
	hp: 60,
	types: [
		"Water",
	],
	stage: "Basic",
	dexId: [
		490,
	],
	attacks: [
		{
			name: {
				ja: "なかまをよぶ",
			},
			effect: {
				ja: "自分の山札から、[水]の「たねポケモン」を2枚まで選び出し、自分のベンチに出す。その後、その山札を切る。",
			},
			cost: [
				"Colorless",
			],
		},
		{
			name: {
				ja: "なみのり",
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			damage: 40,
		},
	],
	weaknesses: [
		{
			type: "Lightning",
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
