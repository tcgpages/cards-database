import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "アクーシャのブイゼル",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Kouki Saitou",
	hp: 60,
	types: [
		"Water",
	],
	stage: "Basic",
	dexId: [
		418,
	],
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				ja: "アクアフロート",
			},
			effect: {
				ja: "このポケモンに{W}エネルギーがついているなら、このポケモンのにげるに必要なエネルギーは、すべてなくなる。",
			},
		},
	],
	attacks: [
		{
			name: {
				ja: "うずしお",
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のエネルギーを1個トラッシュする。",
			},
			cost: [
				"Water",
				"Colorless",
			],
			damage: 20,
		},
	],
	weaknesses: [
		{
			type: "Lightning",
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
