import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "フーディンEX"
	},
	illustrator: "PLANETA",
	rarity: "None",
	category: "Pokemon",
	hp: 160,
	types: [
		"Psychic"
	],
	stage: "Basic",
	suffix: "EX",
	abilities: [
		{
			name: {
				ja: "スプーンまげ"
			},
			effect: {
				ja: "この特性は、手札から「フーディンEX」を出して、このポケモンが進化するとき、1回使える。進化する前に、相手のバトルポケモンにダメカンを2個のせ、相手のベンチポケモン1匹にもダメカンを3個のせる。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "サプレッション"
			},
			effect: {
				ja: "エネルギーがついている相手のポケモン全員に、ダメカンをそれぞれ3個ずつのせる。"
			},
			cost: [
				"Psychic",
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
