import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,
	name: {
		ja: "ドラピオンV"
	},
	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: [
		"Darkness"
	],
	stage: "Basic",
	suffix: "V",
	attacks: [
		{
			name: {
				ja: "たたきつぶす"
			},
			cost: [
				"Darkness",
				"Colorless",
				"Colorless"
			],
			damage: 70
		},
		{
			name: {
				ja: "ハザードクロー"
			},
			effect: {
				ja: "このポケモンについているエネルギーを2個トラッシュし、相手のバトルポケモンをどくとマヒにする。"
			},
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 130
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 3,
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
