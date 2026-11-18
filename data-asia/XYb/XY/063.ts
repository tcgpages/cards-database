import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "メガルカリオEX"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 220,
	types: [
		"Fighting"
	],
	stage: "MEGA",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "ライジングフィスト"
			},
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Fighting",
				"Fighting",
				"Fighting"
			],
			damage: 140
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
