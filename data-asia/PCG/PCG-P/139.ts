import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "蒼海のマナフィ",
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
		490,
	],
	attacks: [
		{
			name: {
				ja: "ヒプノスプラッシュ",
			},
			effect: {
				ja: "相手を「ねむり」状態にする。",
			},
			cost: [
				"Water",
			],
			damage: 10,
		},
		{
			name: {
				ja: "きせきのひかり",
			},
			effect: {
				ja: "自分のダメージカウンターを1個とりのぞき、特殊状態をすべて回復させる。",
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
