import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "サンダース",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Masakazu Fukuda",
	hp: 70,
	types: [
		"Lightning",
	],
	stage: "Stage1",
	evolveFrom: {
		ja: "イーブイ",
	},
	dexId: [
		135,
	],
	attacks: [
		{
			name: {
				ja: "でんきショック",
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手をマヒにする。",
			},
			cost: [
				"Lightning",
				"Colorless",
			],
			damage: 20,
		},
		{
			name: {
				ja: "ミサイルばり",
			},
			effect: {
				ja: "コインを4回投げ、オモテ×20ダメージ。",
			},
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			damage: "20×",
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
	retreat: 0,
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
