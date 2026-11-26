import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ポケパークのゴニョニョ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Kanako Eo",
	hp: 60,
	types: [
		"Colorless",
	],
	stage: "Basic",
	dexId: [
		293,
	],
	attacks: [
		{
			name: {
				ja: "おどろかす",
			},
			effect: {
				ja: "相手の手札から、オモテを見ないでカードを1枚選び出し、そのカードを見る。その後、そのカードを相手の山札にもどし、その山札を切る。",
			},
			cost: [
				"Colorless",
			],
		},
		{
			name: {
				ja: "ハイパーボイス",
			},
			cost: [
				"Colorless",
				"Colorless",
			],
			damage: 20,
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
