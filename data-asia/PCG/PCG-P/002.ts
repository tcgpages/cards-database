import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "リザードン",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Mitsuhiro Arita",
	hp: 120,
	types: [
		"Fire",
	],
	stage: "Stage2",
	evolveFrom: {
		ja: "リザード",
	},
	dexId: [
		6,
	],
	attacks: [
		{
			name: {
				ja: "ほのおをまとう",
			},
			effect: {
				ja: "コインを1回投げオモテなら、自分のトラッシュから{R}エネルギーを2枚まで選び出し、自分につける。",
			},
			cost: [
				"Fire",
				"Colorless",
			],
			damage: 30,
		},
		{
			name: {
				ja: "ひばしら",
			},
			effect: {
				ja: "のぞむなら、自分の{R}エネルギーを1個トラッシュしてよい。その場合、相手のベンチポケモン1匹にも、30ダメージ。",
			},
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			damage: 60,
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
