import { Card } from "../../../interfaces"
import Set from "../Guardians Rising"

const card: Card = {
	name: { en: "Alolan Vulpix" },
	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [37],
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			name: { en: "Beacon" },
			effect: { en: "Search your deck for up to 2 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck." }
		},
		{
			cost: ["Colorless", "Colorless"],
			name: { en: "Icy Snow" },
			damage: 20
		}
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	retreat: 1,

	description: { en: "It exhales air colder than -58 degrees Fahrenheit. Elderly people in Alola call this Pokémon by an older name—Keokeo." },

	variants: [{ type: "holo", foil: "cosmos" }],
	thirdParty: { tcgplayer: 174488 }
}

export default card
