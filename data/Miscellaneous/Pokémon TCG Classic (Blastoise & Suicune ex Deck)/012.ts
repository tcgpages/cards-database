import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Blastoise & Suicune ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Hypno" },
	illustrator: "OOYAMA",
	rarity: "None",
	category: "Pokemon",

	dexId: [97],
	hp: 110,
	types: ["Psychic"],
	stage: "Stage1",
	evolveFrom: { en: "Drowzee" },

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { en: "Meditate" },
			damage: "20+",
			effect: { en: "This attack does 10 more damage for each damage counter on your opponent's Active Pokémon." }
		},
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: { en: "Hypnoblast" },
			damage: 70,
			effect: { en: "Your opponent's Active Pokémon is now Asleep." }
		}
	],

	weaknesses: [{ type: "Psychic", value: "×2" }],
	retreat: 2,
	description: { en: "As a matter of course, it makes anyone it meets fall asleep and has a taste of their dreams. Anyone having a good dream, it carries off." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 528000 }
		}
	]
}

export default card
