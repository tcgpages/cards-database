import { Card } from "../../../interfaces"
import Set from "../McDonald's Collection 2026"

const card: Card = {
	set: Set,
	name: { en: "Mimikyu" },
	illustrator: "miki kudo",
	rarity: "None",
	category: "Pokemon",

	dexId: [778],
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: { en: "Call for Family" },
			effect: { en: "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck." }
		},
		{
			cost: ["Psychic"],
			name: { en: "Scratch" },
			damage: 20
		}
	],

	weaknesses: [{ type: "Metal", value: "×2" }],
	retreat: 1,
	description: { en: "This Pokémon lives in dark places untouched by sunlight. When it appears before humans, it hides itself under a cloth that resembles a Pikachu." },
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 730420 }
		}
	]
}

export default card
