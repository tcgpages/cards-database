import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Blastoise & Suicune ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Drowzee" },
	illustrator: "Suwama Chiaki",
	rarity: "None",
	category: "Pokemon",

	dexId: [96],
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: { en: "Psychic Boom" },
			damage: "10×",
			effect: { en: "This attack does 10 damage for each Energy attached to your opponent's Active Pokémon." }
		},
		{
			cost: ["Colorless", "Colorless"],
			name: { en: "Headbutt" },
			damage: 20
		}
	],

	weaknesses: [{ type: "Psychic", value: "×2" }],
	retreat: 2,
	description: { en: "It finds really fun dreams tasty. When it makes friends with people, it may show them the most delicious dreams it's ever eaten." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527999 }
		}
	]
}

export default card
