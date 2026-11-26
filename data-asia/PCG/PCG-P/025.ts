import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ラルースのゴンベ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Atsuko Nishida",
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
				ja: "あくび",
			},
			effect: {
				ja: "相手を「ねむり」状態にする。",
			},
			cost: [
				"Colorless",
			],
		},
		{
			name: {
				ja: "じゅうていおん",
			},
			effect: {
				ja: "相手のポケモン1匹に、20ダメージ。",
			},
			cost: [
				"Colorless",
				"Colorless",
			],
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
			type: "holo",
		},
	],
}

export default card
