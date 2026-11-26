import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Furfrou"
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Two Diamond",
	category: "Pokemon",
	dexId: [
		676
	],
	hp: 80,
	types: [
		"Colorless"
	],
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fur Coat"
			},
			effect: {
				en: "This Pokémon takes −20 damage from attacks."
			}
		}
	],
	attacks: [
		{
			name: {
				en: "Quick Blow"
			},
			damage: "40+",
			cost: [
				"Colorless",
				"Colorless"
			],
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage."
			}
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		}
	],
	retreat: 1,
}

export default card
