import { Card } from "../../../interfaces"
import Set from "../Dragon Majesty"

const card: Card = {
	name: { en: "Altaria" },
	illustrator: "Shin Nagasawa",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [334],
	hp: 80,
	types: ["Dragon"],
	evolveFrom: { en: "Swablu" },
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { en: "Fight Song" },
			effect: { en: "Your Dragon Pokémon's attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance)." }
		}
	],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { en: "Pierce" },
			damage: 20
		}
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		}
	],
	retreat: 1,

	description: { en: "On sunny days, it flies freely through the sky and blends into the clouds. It sings in a beautiful soprano." },

	variants: [{ type: "holo" }],
	thirdParty: { tcgplayer: 184219 }
}

export default card
