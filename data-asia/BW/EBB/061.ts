import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "シャンデラEX"
	},
	illustrator: "Ryo Ueda",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		609
	],
	hp: 170,
	types: [
		"Psychic"
	],
	stage: "Basic",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "のろいのしずく"
			},
			effect: {
				ja: "ダメカン4個を、相手のポケモンに好きなようにのせる。"
			},
			cost: [
				"Psychic"
			]
		},
		{
			name: {
				ja: "あやしいともしび"
			},
			effect: {
				ja: "相手のバトルポケモンをやけどとこんらんにする。"
			},
			cost: [
				"Psychic",
				"Psychic",
				"Colorless"
			],
			damage: 70
		}
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "holo",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "holo"
		}
	]
}

export default card
