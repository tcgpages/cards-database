import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "レックウザ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Hiromichi Sugiyama",
	hp: 80,
	types: [
		"Colorless",
	],
	stage: "Basic",
	dexId: [
		384,
	],
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				ja: "ドラゴンオーラ",
			},
			effect: {
				ja: "このポケモンに、{R}の基本エネルギーと{L}の基本エネルギーがついているなら、このポケモンは、相手のワザによる効果を受けない。",
			},
		},
	],
	attacks: [
		{
			name: {
				ja: "ローリングアタック",
			},
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージを追加。",
			},
			cost: [
				"Colorless",
				"Colorless",
			],
			damage: "20+",
		},
	],
	weaknesses: [
		{
			type: "Colorless",
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
