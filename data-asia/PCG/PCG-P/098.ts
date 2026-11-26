import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "レジアイス",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "2005 Pikachu Project",
	hp: 80,
	types: [
		"Water",
	],
	stage: "Basic",
	dexId: [
		378,
	],
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				ja: "クリアボディー",
			},
			effect: {
				ja: "このポケモンは特殊状態にならず、このポケモンが受けている特殊状態は、すべて消える。",
			},
		},
	],
	attacks: [
		{
			name: {
				ja: "こごえるかぜ",
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手をねむりにする。",
			},
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			damage: 40,
		},
	],
	weaknesses: [
		{
			type: "Metal",
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
