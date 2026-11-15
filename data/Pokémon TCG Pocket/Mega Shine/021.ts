import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Phione"
	},
	illustrator: "kawayoo",
	rarity: "Two Diamond",
	category: "Pokemon",
	dexId: [
		489
	],
	hp: 70,
	types: [
		"Water"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Aqua Turbo"
			},
			damage: 10,
			cost: [
				"Water"
			],
			effect: {
				en: "Take a {W} Energy from your Energy Zone and attach it to 1 of your Benched {W} Pokémon."
			}
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		}
	],
	retreat: 1,
}

export default card
