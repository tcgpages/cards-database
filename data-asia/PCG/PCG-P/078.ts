import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ピチュー兄弟",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Kagemaru Himeno",
	hp: 60,
	types: [
		"Lightning",
	],
	stage: "Basic",
	dexId: [
		172,
	],
	attacks: [
		{
			name: {
				ja: "ちょこまか",
			},
			effect: {
				ja: "コインを2回投げ、オモテ×20ダメージ。1回でもオモテなら、相手をこんらんにする。",
			},
			cost: [
				"Lightning",
				"Lightning",
			],
			damage: "20×",
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
