import { Card } from "../../../interfaces"
import Set from "../Unified Minds"

const card: Card = {
	name: { en: "Jirachi-GX" },
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [385],
	hp: 160,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: { en: "Psychic Zone" },
			effect: { en: "Don't apply Psychic Weakness when Pokémon (both yours and your opponent's) take damage from attacks." }
		}
	],

	attacks: [
		{
			cost: ["Psychic"],
			name: { en: "Star Search" },
			effect: { en: "Search your deck for an Energy card and attach it to 1 of your Psychic Pokémon. Then, shuffle your deck." }
		},
		{
			cost: ["Psychic", "Psychic", "Psychic"],
			name: { en: "Star Shield-GX" },
			effect: { en: "Prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn. (You can't use more than 1 GX attack in a game.)" },
			damage: 100
		}
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 1,

	variants: [{ type: "holo", subtype: "textured" }],
	thirdParty: { tcgplayer: 226132 }
}

export default card
