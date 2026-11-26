import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "フォレトス",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Midori Harada",
	hp: 70,
	types: [
		"Grass",
	],
	stage: "Stage1",
	evolveFrom: {
		ja: "クヌギダマ",
	},
	dexId: [
		205,
	],
	attacks: [
		{
			name: {
				ja: "たいあたり",
			},
			cost: [
				"Colorless",
				"Colorless",
			],
			damage: 20,
		},
		{
			name: {
				ja: "どくどく",
			},
			effect: {
				ja: "相手をどくにする。このワザでどくになったポケモンは、ポケモンチェックのときにのせるどくのダメージカウンターの数が2個になる。",
			},
			cost: [
				"Grass",
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
	retreat: 2,
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
