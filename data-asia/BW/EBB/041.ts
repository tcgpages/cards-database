import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "エモンガ"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		587
	],
	hp: 70,
	types: [
		"Lightning"
	],
	stage: "Basic",
	description: {
		ja: "森の 木の上で 暮らす。 マントのような 膜の 内側を 放電 させながら 滑空する。"
	},
	attacks: [
		{
			name: {
				ja: "なかまをよぶ"
			},
			effect: {
				ja: "自分の山札からたねポケモンを2枚選び、ベンチに出す。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "バチバチ"
			},
			cost: [
				"Lightning"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "－20"
		}
	],
	retreat: 0,
	variants: [
		{
			type: "normal",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "normal"
		},
		{
			type: "reverse",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "reverse"
		}
	]
}

export default card
