import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "コータス",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Ken Sugimori",
	hp: 80,
	types: [
		"Fighting",
	],
	stage: "Basic",
	dexId: [
		324,
	],
	attacks: [
		{
			name: {
				ja: "ドわすれ",
			},
			effect: {
				ja: "相手の持っているワザを1つ選ぶ。次の相手の番、このワザを受けた相手は、そのワザを使うことができない。",
			},
			cost: [
				"Colorless",
			],
		},
		{
			name: {
				ja: "のしかかり",
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手をマヒにする。",
			},
			cost: [
				"Fighting",
				"Colorless",
			],
			damage: 20,
		},
	],
	weaknesses: [
		{
			type: "Water",
		},
	],
	retreat: 2,
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
