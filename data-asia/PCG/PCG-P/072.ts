import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "レジロック",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Ken Sugimori",
	hp: 80,
	types: [
		"Fighting",
	],
	stage: "Basic",
	dexId: [
		377,
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
				ja: "いわなだれ",
			},
			effect: {
				ja: "相手のベンチポケモン2匹にも、それぞれ10ダメージ。",
			},
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			damage: 40,
		},
	],
	weaknesses: [
		{
			type: "Water",
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
