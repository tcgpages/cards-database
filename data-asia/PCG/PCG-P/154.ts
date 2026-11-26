import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "蒼海のマナフィ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Naoyo Kimura",
	hp: 60,
	types: [
		"Water",
	],
	stage: "Basic",
	dexId: [
		490,
	],
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				ja: "しぜんかいふく",
			},
			effect: {
				ja: "このポケモンに、手札から{W}エネルギーをつけたとき、このポケモンの特殊状態は、すべて回復する。",
			},
		},
	],
	attacks: [
		{
			name: {
				ja: "みずのはどう",
			},
			effect: {
				ja: "相手を「ねむり」状態にする。",
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
