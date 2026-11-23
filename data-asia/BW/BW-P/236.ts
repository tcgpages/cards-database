import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "エモンガ"
	},
	variants: [{ type: "holo" }],
	rarity: "Promo",
	illustrator: "Kanako Eo",
	category: "Pokemon",
	hp: 70,
	types: [
		"Lightning"
	],
	stage: "Basic",
	dexId: [
		587
	],
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
			value: "-20"
		}
	],
	retreat: 0
}

export default card
