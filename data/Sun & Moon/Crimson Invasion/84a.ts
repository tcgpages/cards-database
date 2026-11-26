import { Card } from "../../../interfaces"
import Set from "../Crimson Invasion"

const card: Card = {
	name: { en: "Regigigas" },
	illustrator: "Hasuno",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [486],
	hp: 180,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { en: "Seal of Antiquity" },
			effect: { en: "This Pokémon can't attack unless Regirock, Regice, and Registeel are on your Bench." }
		}
	],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless", "Colorless", "Colorless"],
			name: { en: "Giant Stomp" },
			effect: { en: "Discard any Stadium card in play." },
			damage: 160
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 4,

	description: { en: "It is said to have made Pokémon that look like itself from a special ice mountain, rocks, and magma." },

	variants: [{ type: "holo" }],
	thirdParty: { tcgplayer: 184331 }
}

export default card
