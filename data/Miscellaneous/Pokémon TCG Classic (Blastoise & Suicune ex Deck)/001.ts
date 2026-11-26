import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Blastoise & Suicune ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Squirtle" },
	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",

	dexId: [7],
	hp: 40,
	types: ["Water"],
	stage: "Basic",
	level: 8,

	attacks: [
		{
			cost: ["Water"],
			name: { en: "Bubble" },
			damage: 10,
			effect: { en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed." }
		},
		{
			cost: ["Water", "Colorless"],
			name: { en: "Withdraw" },
			effect: { en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage done to this Pokémon by attacks." }
		}
	],

	weaknesses: [{ type: "Lightning", value: "×2" }],
	retreat: 1,
	description: { en: "After birth, its back swells and hardens into a shell. It powerfully sprays foam from its mouth." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527985 }
		}
	]
}

export default card
