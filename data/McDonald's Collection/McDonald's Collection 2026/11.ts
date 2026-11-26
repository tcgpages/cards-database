import { Card } from "../../../interfaces"
import Set from "../McDonald's Collection 2026"

const card: Card = {
	set: Set,
	name: { en: "Metagross" },
	illustrator: "Nurikabe",
	rarity: "None",
	category: "Pokemon",

	dexId: [376],
	hp: 180,
	types: ["Metal"],
	stage: "Stage2",
	evolveFrom: { en: "Metang" },

	attacks: [
		{
			cost: ["Metal"],
			name: { en: "Meteor Mash" },
			damage: 60,
			effect: { en: "During your next turn, this Pokémon's Meteor Mash attack does 60 more damage (before applying Weakness and Resistance)." }
		},
		{
			cost: ["Metal", "Colorless", "Colorless", "Colorless"],
			name: { en: "Luster Blast" },
			damage: 200,
			effect: { en: "Discard 2 Energy from this Pokémon." }
		}
	],

	weaknesses: [{ type: "Fire", value: "×2" }],
	resistances: [{ type: "Grass", value: "-30" }],
	retreat: 3,
	description: { en: "Because the magnetic powers of these Pokémon get stronger in freezing temperatures, Metagross living on snowy mountains are full of energy." },
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: { tcgplayer: 730427 }
		}
	]
}

export default card
