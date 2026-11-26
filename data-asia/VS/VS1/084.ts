import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "シバのハガネール",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [208],
	hp: 80,
	types: ["Metal"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ずつき",
			},
			damage: 10,
		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				ja: "いわくだき",
			},
			effect: {
				ja: "コインを1回投げ、「おもて」なら、20ダメージを追加する。",
			},
			damage: "20+",
		},
	],

	retreat: 4,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
		},
	],
};

export default card
