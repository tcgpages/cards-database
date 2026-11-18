import { Card } from "../../../interfaces"
import Set from "../Burning Shadows"

const card: Card = {
	name: { en: "Tapu Fini-GX" },
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [788],
	hp: 170,
	types: ["Water"],
	stage: "Basic",
	suffix: "GX",

	attacks: [
		{
			cost: ["Colorless"],
			name: { en: "Aqua Ring" },
			effect: { en: "You may switch this Pokémon with 1 of your Benched Pokémon." },
			damage: 20
		},
		{
			cost: ["Water", "Water", "Colorless"],
			name: { en: "Hydro Shot" },
			effect: { en: "Discard 2 Water Energy from this Pokémon. This attack does 120 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
		},
		{
			cost: ["Water"],
			name: { en: "Tapu Storm-GX" },
			effect: { en: "Shuffle your opponent's Active Pokémon and all cards attached to it into their deck. If your opponent has no Benched Pokémon, this attack does nothing. (You can't use more than 1 GX attack in a game.)" }
		}
	],
	retreat: 1,

	variants: [
		{ type: "holo", thirdParty: { tcgplayer: 179371 } },
		{ type: "holo", size: "jumbo", thirdParty: { tcgplayer: 191605 } }
	],
	thirdParty: { tcgplayer: 179371 }
}

export default card
