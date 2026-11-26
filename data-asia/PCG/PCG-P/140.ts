import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ペリッパーδ-デルタ種",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Mitsuhiro Arita",
	hp: 70,
	types: [
		"Lightning",
	],
	stage: "Stage1",
	evolveFrom: {
		ja: "キャモメ",
	},
	dexId: [
		279,
	],
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				ja: "しろいきり",
			},
			effect: {
				ja: "このポケモンが、「2進化」の「進化ポケモン」のワザによって受けるダメージは、「-30」される。",
			},
		},
	],
	attacks: [
		{
			name: {
				ja: "でんげきのつばさ",
			},
			effect: {
				ja: "自分のベンチポケモン1匹にも、10ダメージ。",
			},
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			damage: 50,
		},
	],
	weaknesses: [
		{
			type: "Lightning",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 0,
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
