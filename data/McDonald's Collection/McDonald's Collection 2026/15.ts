import { Card } from "../../../interfaces"
import Set from "../McDonald's Collection 2026"

const card: Card = {
	set: Set,
	name: { en: "Wooloo" },
	illustrator: "Wintr Wandr",
	rarity: "None",
	category: "Pokemon",

	dexId: [831],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { en: "Knock Over" },
			damage: 30,
			effect: { en: "You may discard a Stadium in play." }
		}
	],

	weaknesses: [{ type: "Fighting", value: "×2" }],
	retreat: 1,
	description: { en: "Its curly fleece is such an effective cushion that this Pokémon could fall off a cliff and stand right back up at the bottom, unharmed." },
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: { tcgplayer: 730432 }
		}
	]
}

export default card
