import { Card } from "../../../interfaces"
import Set from "../Guardians Rising"

const card: Card = {
	name: { en: "Tapu Lele-GX" },
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [786],
	hp: 170,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: { en: "Wonder Tag" },
			effect: { en: "When you play this Pokémon from your hand onto your Bench during your turn, you may search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck." }
		}
	],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { en: "Energy Drive" },
			effect: { en: "This attack does 20 damage times the amount of Energy attached to both Active Pokémon. This damage isn't affected by Weakness or Resistance." },
			damage: "20×"
		},
		{
			cost: ["Psychic"],
			name: { en: "Tapu Cure-GX" },
			effect: { en: "Heal all damage from 2 of your Benched Pokémon. (You can't use more than 1 GX attack in a game.)" }
		}
	],
	retreat: 1,

	variants: [
		{ type: "holo", thirdParty: { tcgplayer: 179367 } },
		{ type: "holo", size: "jumbo", thirdParty: { tcgplayer: 179368 } }
	],
	thirdParty: { tcgplayer: 179367 }
}

export default card
