import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "アクーシャのブイゼル",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Midori Harada",
	hp: 60,
	types: [
		"Water",
	],
	stage: "Basic",
	dexId: [
		418,
	],
	attacks: [
		{
			name: {
				ja: "かまいたち",
			},
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗する。",
			},
			cost: [
				"Colorless",
			],
			damage: 20,
		},
		{
			name: {
				ja: "スマッシュターン",
			},
			effect: {
				ja: "のぞむなら、自分を自分のベンチポケモンと入れ替えてよい。",
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
