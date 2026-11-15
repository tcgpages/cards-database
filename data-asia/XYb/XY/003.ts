import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ラフレシア"
	},
	illustrator: "Midori Harada",
	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: [
		"Grass"
	],
	stage: "Stage2",
	dexId: [
		45
	],
	description: {
		ja: "世界一 大きな 花びらは 歩くたびに 揺れて 大量の 毒花粉を ばらまいている。"
	},
	abilities: [
		{
			name: {
				ja: "イライラかふん"
			},
			effect: {
				ja: "このポケモンがいるかぎり、おたがいのプレイヤーは、手札からグッズを出して使えない。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "ソーラービーム"
			},
			cost: [
				"Grass",
				"Grass",
				"Colorless"
			],
			damage: 70
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 3,
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
			foil: "mirror"
		}
	]
}

export default card
