import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "レックウザ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Katsura Tabata",
	hp: 80,
	types: [
		"Colorless",
	],
	stage: "Basic",
	dexId: [
		384,
	],
	attacks: [
		{
			name: {
				ja: "そらをとぶ",
			},
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗する。オモテなら、次の相手の番、自分はワザによるダメージや効果を受けない。",
			},
			cost: [
				"Colorless",
			],
			damage: 10,
		},
		{
			name: {
				ja: "ドラゴンクロー",
			},
			cost: [
				"Fire",
				"Lightning",
			],
			damage: 30,
		},
	],
	weaknesses: [
		{
			type: "Colorless",
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
