import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ポケパークのアチャモ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Kanako Eo",
	hp: 60,
	types: [
		"Fire",
	],
	stage: "Basic",
	dexId: [
		255,
	],
	attacks: [
		{
			name: {
				ja: "ひっかく",
			},
			cost: [
				"Colorless",
			],
			damage: 10,
		},
		{
			name: {
				ja: "かえんほうしゃ",
			},
			effect: {
				ja: "自分の{R}エネルギーを1個トラッシュする。",
			},
			cost: [
				"Fire",
				"Colorless",
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
	retreat: 1,
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
