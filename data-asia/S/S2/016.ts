import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトモシ"
	},
	rarity: "Common",
	illustrator: "Sekio",
	category: "Pokemon",
	hp: 60,
	types: [
		"Fire"
	],
	stage: "Basic",
	dexId: [
		607
	],
	description: {
		ja: "炎で 熱せられた 体は ほんのり 温かい。 迷子の 手を 引き 霊界へと 誘う。"
	},
	attacks: [
		{
			name: {
				ja: "こげこげ"
			},
			effect: {
				ja: "相手のバトルポケモンをやけどにする。"
			},
			cost: [
				"Fire"
			]
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
