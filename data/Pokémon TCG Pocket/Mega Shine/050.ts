import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Revavroom"
	},
	illustrator: "DOM",
	rarity: "Three Diamond",
	category: "Pokemon",
	dexId: [
		966
	],
	hp: 110,
	types: [
		"Metal"
	],
	evolveFrom: {
		en: "Varoom"
	},
	stage: "Stage1",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Metal Transport"
			},
			effect: {
				en: "Once during your turn, you may switch your Active {M} Pokémon with 1 of your Benched Pokémon."
			}
		}
	],
	attacks: [
		{
			name: {
				en: "Outta-Control Dash"
			},
			damage: 60,
			cost: [
				"Metal",
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		}
	],
	retreat: 3,
}

export default card
