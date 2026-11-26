import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ドーミラー"
	},
	illustrator: "Akira Komayama",
	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: [
		"Metal"
	],
	stage: "Basic",
	dexId: [
		436
	],
	description: {
		ja: "ドーミラーの 背中の 模様には 神秘的な 力が 宿ると 昔の 人たちは 信じていた。"
	},
	attacks: [
		{
			name: {
				ja: "たいあたり"
			},
			cost: [
				"Metal"
			],
			damage: 10
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
			foil: "mirror"
		}
	]
}

export default card
