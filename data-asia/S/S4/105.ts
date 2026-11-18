import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,
	name: {
		ja: "フーディンV"
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: [
		"Psychic"
	],
	stage: "Basic",
	suffix: "V",
	attacks: [
		{
			name: {
				ja: "しねんのさじ"
			},
			effect: {
				ja: "ダメカン3個を、相手のポケモンに好きなようにのせる。"
			},
			cost: [
				"Psychic"
			]
		},
		{
			name: {
				ja: "マインドルーラー"
			},
			effect: {
				ja: "相手の手札の枚数×30ダメージ。"
			},
			cost: [
				"Psychic",
				"Psychic"
			],
			damage: "30×"
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
