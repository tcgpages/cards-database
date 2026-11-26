import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "バクフーン",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Hajime Kusajima",
	hp: 110,
	types: [
		"Fire",
	],
	stage: "Stage2",
	evolveFrom: {
		ja: "マグマラシ",
	},
	dexId: [
		157,
	],
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				ja: "やけつくオーラ",
			},
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、ポケモンチェックのたび、おたがいのバトルポケモン全員に、ダメージカウンターを、それぞれ1個ずつのせる。",
			},
		},
	],
	attacks: [
		{
			name: {
				ja: "ゆれるほのお",
			},
			effect: {
				ja: "相手を「ねむり」状態にする。",
			},
			cost: [
				"Fire",
			],
			damage: 20,
		},
		{
			name: {
				ja: "いかり",
			},
			effect: {
				ja: "自分のダメージカウンター×10ダメージを追加する。",
			},
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			damage: "50+",
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
