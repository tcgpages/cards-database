import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "オオスバメ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Kagemaru Himeno",
	hp: 70,
	types: [
		"Colorless",
	],
	stage: "Stage1",
	evolveFrom: {
		ja: "スバメ",
	},
	dexId: [
		277,
	],
	attacks: [
		{
			name: {
				ja: "きあいだめ",
			},
			effect: {
				ja: "次の自分の番、自分が使う「こうそくいどう」のダメージは「70」になる。",
			},
			cost: [
				"Colorless",
			],
		},
		{
			name: {
				ja: "こうそくいどう",
			},
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、自分はワザによるダメージや効果を受けない。",
			},
			cost: [
				"Colorless",
				"Colorless",
			],
			damage: 30,
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
	retreat: 1,
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
