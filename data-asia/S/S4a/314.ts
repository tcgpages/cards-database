import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ストリンダーV"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare V",
	category: "Pokemon",
	hp: 210,
	types: [
		"Lightning"
	],
	stage: "Basic",
	suffix: "V",
	attacks: [
		{
			name: {
				ja: "どくづき"
			},
			effect: {
				ja: "相手のバトルポケモンをどくにする。"
			},
			cost: [
				"Lightning"
			],
			damage: 20
		},
		{
			name: {
				ja: "エレキライオット"
			},
			effect: {
				ja: "相手のバトルポケモンがどくなら、90ダメージ追加。"
			},
			cost: [
				"Lightning",
				"Lightning",
				"Colorless"
			],
			damage: "90+"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 2,
	regulationMark: "D",
	variants: [
		{
			type: "holo",
			languages: [
				"ja"
			]
		}
	]
}

export default card
