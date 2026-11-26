import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ルギア",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Kouki Saitou",
	hp: 80,
	types: [
		"Psychic",
	],
	stage: "Basic",
	dexId: [
		249,
	],
	attacks: [
		{
			name: {
				ja: "エアロブラスト",
			},
			effect: {
				ja: "コインを2回投げ、オモテ×20ダメージを追加する。",
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			damage: "20+",
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
		},
	],
}

export default card
