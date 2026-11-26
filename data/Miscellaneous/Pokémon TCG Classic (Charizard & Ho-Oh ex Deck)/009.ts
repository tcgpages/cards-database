import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Charizard & Ho-Oh ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Raichu" },
	illustrator: "Hasuno",
	rarity: "None",
	category: "Pokemon",

	dexId: [26],
	hp: 130,
	types: ["Lightning"],
	stage: "Stage1",
	evolveFrom: { en: "Pikachu" },

	attacks: [
		{
			cost: ["Colorless"],
			name: { en: "Pain-Full Punch" },
			damage: 40
		},
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: { en: "Mach Bolt" },
			damage: 120
		}
	],

	weaknesses: [{ type: "Fighting", value: "×2" }],
	retreat: 1,
	description: { en: "Its long tail serves as a ground to protect itself from its own high-voltage power." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527944 }
		}
	]
}

export default card
