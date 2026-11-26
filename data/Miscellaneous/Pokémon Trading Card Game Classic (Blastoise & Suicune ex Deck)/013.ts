import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Blastoise & Suicune ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Mr. Mime" },
	illustrator: "Kasumi Matsuda",
	rarity: "None",
	category: "Pokemon",

	dexId: [122],
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",
	level: 20,

	abilities: [
		{
			type: "Pokemon Power",
			name: { en: "Dampening Shield" },
			effect: { en: "As long as this Pokémon is on your Bench, Pokémon in play (both yours and your opponent's) have no Weakness or Resistance." }
		}
	],

	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: { en: "Juggling" },
			damage: "10×",
			effect: { en: "Flip 4 coins. This attack does 10 damage for each heads." }
		}
	],

	weaknesses: [{ type: "Psychic", value: "×2" }],
	retreat: 1,
	description: { en: "If interrupted while miming, it will slap around the enemy with its broad hands." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 528184 }
		}
	]
}

export default card
