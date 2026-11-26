import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ロータのマネネ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Kouki Saitou",
	hp: 50,
	types: [
		"Psychic",
	],
	stage: "Basic",
	dexId: [
		439,
	],
	attacks: [
		{
			name: {
				ja: "バリアアタック",
			},
			effect: {
				ja: "次の相手の番、自分が受けるワザによるダメージは、「-30」される。",
			},
			cost: [
				"Psychic",
				"Colorless",
			],
			damage: 20,
		},
	],
	weaknesses: [
		{
			type: "Psychic",
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
