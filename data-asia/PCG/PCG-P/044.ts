import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ポケパークのセレビィ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Kanako Eo",
	hp: 60,
	types: [
		"Grass",
	],
	stage: "Basic",
	dexId: [
		251,
	],
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				ja: "しぜんかいふく",
			},
			effect: {
				ja: "このポケモンに、手札から{G}エネルギーをつけたとき、このポケモンの特殊状態は、すべて回復する。",
			},
		},
	],
	attacks: [
		{
			name: {
				ja: "ねんりき",
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手をマヒにする。",
			},
			cost: [
				"Grass",
				"Colorless",
			],
			damage: 20,
		},
	],
	weaknesses: [
		{
			type: "Fire",
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
