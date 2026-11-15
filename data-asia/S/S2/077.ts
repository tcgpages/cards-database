import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "カビゴン"
	},
	rarity: "Uncommon",
	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 150,
	types: [
		"Colorless"
	],
	stage: "Basic",
	dexId: [
		143
	],
	description: {
		ja: "１日に 食べ物を ４００キロ 食べないと 気がすまない。 食べ終わると 眠ってしまう。"
	},
	attacks: [
		{
			name: {
				ja: "もってくる"
			},
			effect: {
				ja: "自分の山札を2枚引く。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "たおれこむ"
			},
			effect: {
				ja: "このポケモンをねむりにする。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 120
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 4,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
