import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Blastoise & Suicune ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Staryu" },
	illustrator: "Naoyo Kimura",
	rarity: "None",
	category: "Pokemon",

	dexId: [120],
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: { en: "Recover" },
			effect: { en: "Discard an Energy from this Pokémon and heal all damage from it." }
		},
		{
			cost: ["Water"],
			name: { en: "Water Gun" },
			damage: 10
		}
	],

	weaknesses: [{ type: "Lightning", value: "×2" }],
	retreat: 1,
	description: { en: "If its body is torn, it can grow back if the red core remains. The core flashes at midnight." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527989 }
		}
	]
}

export default card
