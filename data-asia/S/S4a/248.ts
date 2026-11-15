import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル サニーゴ"
	},
	illustrator: "Mizue",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 80,
	types: [
		"Psychic"
	],
	stage: "Basic",
	dexId: [
		222
	],
	description: {
		ja: "大昔 海だった 場所に よく 転がっている。 石ころと 間違えて 蹴ると たたられる。"
	},
	attacks: [
		{
			name: {
				ja: "のろいのしずく"
			},
			effect: {
				ja: "ダメカン3個を、相手のポケモンに好きなようにのせる。"
			},
			cost: [
				"Psychic"
			]
		}
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
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
