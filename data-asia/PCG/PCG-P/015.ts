import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ヤミカラス",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Ken Sugimori",
	hp: 60,
	types: [
		"Darkness",
	],
	stage: "Basic",
	dexId: [
		198,
	],
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				ja: "ふみん",
			},
			effect: {
				ja: "このポケモンはねむりにならず、このポケモンが受けているねむりは、すべて消える。",
			},
		},
	],
	attacks: [
		{
			name: {
				ja: "だましうち",
			},
			effect: {
				ja: "相手のポケモン1匹に、そのポケモンの弱点・抵抗力・すべての効果に関係なく、20ダメージ。",
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
	resistances: [
		{
			type: "Psychic",
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
