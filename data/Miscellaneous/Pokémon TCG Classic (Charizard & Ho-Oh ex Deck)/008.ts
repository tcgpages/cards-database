import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Charizard & Ho-Oh ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Pikachu" },
	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",

	dexId: [25],
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",
	level: 12,

	attacks: [
		{
			cost: ["Colorless"],
			name: { en: "Gnaw" },
			damage: 10
		},
		{
			cost: ["Lightning", "Colorless"],
			name: { en: "Thunder Jolt" },
			damage: 30,
			effect: { en: "Flip a coin. If tails, this Pokémon also does 10 damage to itself." }
		}
	],

	weaknesses: [{ type: "Fighting", value: "×2" }],
	retreat: 1,
	description: { en: "When several of these Pokémon gather, their electricity can cause lightning storms." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527943 }
		}
	]
}

export default card
