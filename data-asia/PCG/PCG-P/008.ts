import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "アメタマ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Kagemaru Himeno",
	hp: 50,
	types: [
		"Water",
	],
	stage: "Basic",
	dexId: [
		283,
	],
	attacks: [
		{
			name: {
				ja: "あわ",
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手をマヒにする。",
			},
			cost: [
				"Water",
			],
			damage: 10,
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
