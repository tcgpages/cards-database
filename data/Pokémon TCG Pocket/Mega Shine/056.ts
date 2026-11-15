import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Haxorus"
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Three Diamond",
	category: "Pokemon",
	dexId: [
		612
	],
	hp: 150,
	types: [
		"Dragon"
	],
	evolveFrom: {
		en: "Fraxure"
	},
	stage: "Stage2",
	attacks: [
		{
			name: {
				en: "Frenzied Blade"
			},
			damage: "50+",
			cost: [
				"Fighting",
				"Metal",
				"Colorless"
			],
			effect: {
				en: "This attack does 20 more damage for each Benched Pokémon (both yours and your opponent's)."
			}
		}
	],
	retreat: 2,
}

export default card
