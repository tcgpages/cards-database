import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "シバのリングマ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [217],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "なぐる",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "じごくがため",
			},
			effect: {
				ja: "コインを1回投げ、「おもて」なら、20ダメージを追加し、相手を「マヒ」状態にする。",
			},
			damage: "10+",
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
		},
	],
};

export default card
