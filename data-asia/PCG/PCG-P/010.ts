import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "マイナン",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Ken Sugimori",
	hp: 50,
	types: [
		"Lightning",
	],
	stage: "Basic",
	dexId: [
		312,
	],
	attacks: [
		{
			name: {
				ja: "でんじは",
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手をマヒにする。",
			},
			cost: [
				"Lightning",
			],
			damage: 10,
		},
		{
			name: {
				ja: "スパーク",
			},
			effect: {
				ja: "相手のベンチポケモン2匹にも、それぞれ10ダメージ。",
			},
			cost: [
				"Colorless",
				"Colorless",
			],
			damage: 10,
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
	retreat: 1,
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
