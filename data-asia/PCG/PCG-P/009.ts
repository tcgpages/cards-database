import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "プラスル",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Ken Sugimori",
	hp: 50,
	types: [
		"Lightning",
	],
	stage: "Basic",
	dexId: [
		311,
	],
	attacks: [
		{
			name: {
				ja: "でんこうせっか",
			},
			effect: {
				ja: "コインを1回投げオモテなら、10ダメージを追加。",
			},
			cost: [
				"Colorless",
			],
			damage: "10+",
		},
		{
			name: {
				ja: "こうそくいどう",
			},
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、自分はワザによるダメージや効果を受けない。",
			},
			cost: [
				"Lightning",
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
	resistances: [
		{
			type: "Metal",
			value: "-30",
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
