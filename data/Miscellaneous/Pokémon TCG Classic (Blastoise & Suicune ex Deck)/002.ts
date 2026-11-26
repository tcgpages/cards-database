import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Blastoise & Suicune ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Wartortle" },
	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",

	dexId: [8],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: { en: "Squirtle" },
	level: 22,

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: { en: "Withdraw" },
			effect: { en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage done to this Pokémon by attacks." }
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: { en: "Bite" },
			damage: 40
		}
	],

	weaknesses: [{ type: "Lightning", value: "×2" }],
	retreat: 1,
	description: { en: "Often hides in water to stalk unwary prey. When swimming quickly, it moves its ears to maintain balance." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527987 }
		}
	]
}

export default card
