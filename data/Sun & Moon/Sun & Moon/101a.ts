import { Card } from "../../../interfaces"
import Set from "../Sun & Moon"

const card: Card = {
	name: { en: "Eevee" },
	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [133],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { en: "Energy Evolution" },
			effect: { en: "When you attach a basic Energy card from your hand to this Pokémon during your turn, you may search your deck for a card that evolves from this Pokémon that is the same type as that Energy card and put it onto this Pokémon to evolve it. Then, shuffle your deck." }
		}
	],

	attacks: [
		{
			cost: ["Colorless"],
			name: { en: "Quick Draw" },
			effect: { en: "Flip a coin. If heads, draw a card." }
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 2,

	description: { en: "Possessing an unbalanced and unstable genetic makeup, it conceals many possible evolutions." },

	variants: [{ type: "holo", foil: "cosmos" }],
	thirdParty: { tcgplayer: 179380 }
}

export default card
