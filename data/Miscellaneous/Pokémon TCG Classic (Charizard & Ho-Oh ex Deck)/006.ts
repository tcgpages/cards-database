import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Charizard & Ho-Oh ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Magmar" },
	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",

	dexId: [126],
	hp: 70,
	types: ["Fire"],
	stage: "Basic",
	level: 31,

	attacks: [
		{
			cost: ["Fire"],
			name: { en: "Smokescreen" },
			damage: 10,
			effect: { en: "During your opponent's next turn, if the Defending Pokémon tries to attack, your opponent flips a coin. If tails, that attack doesn't happen." }
		},
		{
			cost: ["Fire", "Fire"],
			name: { en: "Smog" },
			damage: 20,
			effect: { en: "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned." }
		}
	],

	weaknesses: [{ type: "Water", value: "×2" }],
	retreat: 1,
	description: { en: "Found at the mouths of volcanoes and extremely hard to spot. There are very few instances of capturing this Pokémon." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527941 }
		}
	]
}

export default card
