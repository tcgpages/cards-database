import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ポケパークのピカチュウ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Kanako Eo",
	hp: 50,
	types: [
		"Lightning",
	],
	stage: "Basic",
	dexId: [
		25,
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
				ja: "10まんボルト",
			},
			effect: {
				ja: "自分のエネルギーをすべてトラッシュする。",
			},
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			damage: 60,
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
