import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ザングースδ-デルタ種",
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
		335,
	],
	attacks: [
		{
			name: {
				ja: "みきり",
			},
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、自分はワザによるダメージや効果を受けない。",
			},
			cost: [
				"Colorless",
			],
			damage: 10,
		},
		{
			name: {
				ja: "メタルクロー",
			},
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			damage: 40,
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
