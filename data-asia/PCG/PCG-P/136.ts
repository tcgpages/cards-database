import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ワカシャモ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Atsuko Nishida",
	hp: 80,
	types: [
		"Fire",
	],
	stage: "Stage1",
	evolveFrom: {
		ja: "アチャモ",
	},
	dexId: [
		256,
	],
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				ja: "しぜんかいふく",
			},
			effect: {
				ja: "このポケモンに、手札から{R}エネルギーをつけたとき、このポケモンの特殊状態は、すべて回復する。",
			},
		},
	],
	attacks: [
		{
			name: {
				ja: "とびかかる",
			},
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗する。",
			},
			cost: [
				"Colorless",
				"Colorless",
			],
			damage: 50,
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
