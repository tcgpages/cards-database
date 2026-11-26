import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ゾロアークBREAK"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 140,
	types: [
		"Darkness"
	],
	dexId: [
		571
	],
	evolveFrom: {
		ja: "ゾロアーク"
	},
	stage: "BREAK",
	attacks: [
		{
			name: {
				ja: "イカサマ"
			},
			effect: {
				ja: "相手のバトルポケモンが持っているワザを1つ選び、このワザとして使う。"
			},
			cost: [
				"Darkness"
			]
		}
	],
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
