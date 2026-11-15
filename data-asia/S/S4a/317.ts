import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ドラパルトV"
	},
	illustrator: "aky CG Works",
	rarity: "Shiny rare V",
	category: "Pokemon",
	hp: 210,
	types: [
		"Psychic"
	],
	stage: "Basic",
	suffix: "V",
	attacks: [
		{
			name: {
				ja: "かみつく"
			},
			cost: [
				"Psychic"
			],
			damage: 30
		},
		{
			name: {
				ja: "アサルトジェット"
			},
			effect: {
				ja: "この番、このポケモンがベンチからバトル場に出ていたなら、80ダメージ追加。"
			},
			cost: [
				"Psychic",
				"Psychic"
			],
			damage: "60+"
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
	retreat: 1,
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
