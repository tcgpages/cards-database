import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "アサナン"
	},
	illustrator: "sui",
	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: [
		"Fighting"
	],
	stage: "Basic",
	dexId: [
		307
	],
	description: {
		ja: "１日 １個だけ 木の実を 食べる。 空腹に 耐えることで 心が 研ぎ澄まされていく。"
	},
	attacks: [
		{
			name: {
				ja: "ひらてうち"
			},
			cost: [
				"Fighting"
			],
			damage: 20
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
			type: "normal"
		},
		{
			type: "reverse",
			foil: "mirror"
		}
	]
}

export default card
