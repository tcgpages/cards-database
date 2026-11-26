import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ポケパークのジラーチ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Kanako Eo",
	hp: 50,
	types: [
		"Metal",
	],
	stage: "Basic",
	dexId: [
		385,
	],
	attacks: [
		{
			name: {
				ja: "みらいよち",
			},
			effect: {
				ja: "自分または相手の山札のカードを上から5枚見て、好きな順番に入れ替えて、その山札の上にもどす。",
			},
			cost: [
				"Colorless",
			],
		},
		{
			name: {
				ja: "スピードスター",
			},
			effect: {
				ja: "このワザは、相手の弱点・抵抗力・すべての効果に関係なく、ダメージを与える。",
			},
			cost: [
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
	retreat: 1,
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
