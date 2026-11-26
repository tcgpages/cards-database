import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "シバのカイリキー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [68],
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
			name: {
				ja: "ダブルラリアット",
			},
			effect: {
				ja: "コインを2回投げ、「おもて」の数×50ダメージ。",
			},
			damage: "50×",
		},
	],

	retreat: 3,

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
