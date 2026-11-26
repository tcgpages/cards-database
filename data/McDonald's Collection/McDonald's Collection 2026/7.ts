import { Card } from "../../../interfaces"
import Set from "../McDonald's Collection 2026"

const card: Card = {
	set: Set,
	name: { en: "Hawlucha" },
	illustrator: "GOSSAN",
	rarity: "None",
	category: "Pokemon",

	dexId: [701],
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { en: "Flying Entry" },
			effect: { en: "When you play this Pokémon from your hand onto your Bench during your turn, you may choose 2 of your opponent's Benched Pokémon and put 1 damage counter on each of them." }
		}
	],

	attacks: [
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: { en: "Wing Attack" },
			damage: 70
		}
	],

	weaknesses: [{ type: "Psychic", value: "×2" }],
	retreat: 1,
	description: { en: "Its elegant finishing moves—performed by nimbly leaping around using its wings—are polished in the forest where it was born and raised." },
	regulationMark: "G",

	variants: [
		{
			type: "normal",
			thirdParty: { tcgplayer: 730422 }
		}
	]
}

export default card
