import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ソーナンス",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Kagemaru Himeno",
	hp: 40,
	types: [
		"Psychic",
	],
	stage: "Basic",
	dexId: [
		202,
	],
	attacks: [
		{
			name: {
				ja: "ひとやすみ",
			},
			effect: {
				ja: "自分のダメージカウンターを2個とりのぞく。",
			},
			cost: [
				"Colorless",
			],
		},
		{
			name: {
				ja: "ふくらむ",
			},
			effect: {
				ja: "次の相手の番、自分が受けるワザによるダメージは、「-20」される。",
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
	retreat: 2,
	variants: [
		{
			type: "normal",
			stamp: [
				"mcdonalds",
			],
		},
	],
}

export default card
