import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "メガフーディンEX"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 210,
	types: [
		"Psychic"
	],
	stage: "MEGA",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "ゼンフォース"
			},
			effect: {
				ja: "相手のバトルポケモンにのっているダメカンの数×30ダメージを追加。"
			},
			cost: [
				"Psychic",
				"Colorless"
			],
			damage: "10+"
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
