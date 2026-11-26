import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ポケパークのゴンベ",
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
		446,
	],
	attacks: [
		{
			name: {
				ja: "まるくなる",
			},
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、自分はワザによるダメージを受けない。",
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
				"Colorless",
				"Colorless",
				"Colorless",
			],
			damage: 30,
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
