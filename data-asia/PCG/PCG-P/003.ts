import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "フシギバナ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Mitsuhiro Arita",
	hp: 120,
	types: [
		"Grass",
	],
	stage: "Stage2",
	evolveFrom: {
		ja: "フシギソウ",
	},
	dexId: [
		3,
	],
	attacks: [
		{
			name: {
				ja: "かくさんソーラービーム",
			},
			effect: {
				ja: "相手のベンチポケモン2匹にも、それぞれ20ダメージ。",
			},
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			damage: 20,
		},
		{
			name: {
				ja: "ハードプラント",
			},
			effect: {
				ja: "次の自分の番、自分は「ハードプラント」を使うことができない。",
			},
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Colorless",
			],
			damage: 80,
		},
	],
	weaknesses: [
		{
			type: "Fire",
		},
	],
	retreat: 3,
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
