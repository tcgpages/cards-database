import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "レジスチル",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Ken Sugimori",
	hp: 80,
	types: [
		"Metal",
	],
	stage: "Basic",
	dexId: [
		379,
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
				ja: "はかいこうせん",
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のエネルギーを1個トラッシュ。",
			},
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			damage: 30,
		},
	],
	weaknesses: [
		{
			type: "Fire",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
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
