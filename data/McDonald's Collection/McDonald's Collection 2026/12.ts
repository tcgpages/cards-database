import { Card } from "../../../interfaces"
import Set from "../McDonald's Collection 2026"

const card: Card = {
	set: Set,
	name: { en: "Jirachi" },
	illustrator: "Kuroimori",
	rarity: "None",
	category: "Pokemon",

	dexId: [385],
	hp: 80,
	types: ["Metal"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: { en: "Swelling Wish" },
			effect: { en: "Attach a Basic Energy card from your discard pile to 1 of your Benched Pokémon." }
		},
		{
			cost: ["Metal", "Colorless"],
			name: { en: "Slap" },
			damage: 30
		}
	],

	weaknesses: [{ type: "Fire", value: "×2" }],
	resistances: [{ type: "Grass", value: "-30" }],
	retreat: 1,
	description: { en: "It is said to have the ability to grant any wish for just one week every thousand years." },
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 730429 }
		}
	]
}

export default card
