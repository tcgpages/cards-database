import { Card } from "../../../interfaces"
import Set from "../McDonald's Collection 2026"

const card: Card = {
	set: Set,
	name: { en: "Eevee" },
	illustrator: "Susumu Maeya",
	rarity: "None",
	category: "Pokemon",

	dexId: [133],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: { en: "Colorful Catch" },
			effect: { en: "Search your deck for up to 3 Basic Energy cards of different types, reveal them, and put them into your hand. Then, shuffle your deck." }
		},
		{
			cost: ["Colorless", "Colorless"],
			name: { en: "Headbutt" },
			damage: 20
		}
	],

	weaknesses: [{ type: "Fighting", value: "×2" }],
	retreat: 1,
	description: { en: "Its genetic code is irregular. It may mutate if it is exposed to radiation from element stones." },
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: { tcgplayer: 730430 }
		}
	]
}

export default card
