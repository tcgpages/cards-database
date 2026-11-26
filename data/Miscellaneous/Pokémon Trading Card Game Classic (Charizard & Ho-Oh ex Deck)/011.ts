import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Charizard & Ho-Oh ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Electrode" },
	illustrator: "Keiji Kinebuchi",
	rarity: "None",
	category: "Pokemon",

	dexId: [101],
	hp: 80,
	types: ["Lightning"],
	stage: "Stage1",
	evolveFrom: { en: "Voltorb" },
	level: 40,

	abilities: [
		{
			type: "Pokemon Power",
			name: { en: "Buzzap" },
			effect: { en: "Once during your turn, you may Knock Out this Pokémon and attach it to 1 of your other Pokémon as a Special Energy card. While this card is attached to a Pokémon, it provides every type of Energy but provides only 2 Energy at a time. This Pokémon Power can't be used if this Pokémon is Asleep, Confused, or Paralyzed." }
		}
	],

	attacks: [
		{
			cost: ["Lightning", "Lightning", "Lightning"],
			name: { en: "Thunder Jolt" },
			damage: 50,
			effect: { en: "Flip a coin. If tails, this Pokémon also does 10 damage to itself." }
		}
	],

	weaknesses: [{ type: "Fighting", value: "×2" }],
	retreat: 1,
	description: { en: "It stores electrical energy under very high pressure. It often explodes with little or no provocation." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527946 }
		}
	]
}

export default card
