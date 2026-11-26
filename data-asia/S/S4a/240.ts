import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "エレズン"
	},
	illustrator: "Kouki Saitou",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: [
		"Lightning"
	],
	stage: "Basic",
	dexId: [
		848
	],
	description: {
		ja: "体内の 毒袋に 溜めた 毒素を 皮膚から 分泌。 触ると ピリピリと 痺れる。"
	},
	attacks: [
		{
			name: {
				ja: "ビンタ"
			},
			cost: [
				"Colorless"
			],
			damage: 10
		},
		{
			name: {
				ja: "バチバチ"
			},
			cost: [
				"Lightning",
				"Colorless"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
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
