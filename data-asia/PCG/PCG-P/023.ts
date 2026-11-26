import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ラブカス",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Atsuko Nishida",
	hp: 60,
	types: [
		"Water",
	],
	stage: "Basic",
	dexId: [
		370,
	],
	attacks: [
		{
			name: {
				ja: "しびれるキッス",
			},
			effect: {
				ja: "相手のバトルポケモンが2匹なら、相手のバトルポケモンを1匹選び、マヒにする。(相手のバトルポケモンが1匹なら、このワザは失敗する。)",
			},
			cost: [
				"Colorless",
			],
		},
		{
			name: {
				ja: "スピードウォーター",
			},
			effect: {
				ja: "相手のエネルギーを1個選び、相手の別のバトルポケモンにつけ替える。(相手のバトルポケモンが1匹なら、この効果はなくなる。)",
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
