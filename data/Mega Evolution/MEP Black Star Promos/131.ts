import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,
	name: { en: "Pokémon RUN Pikachu" },
	illustrator: "The Pokémon Company",
	rarity: "Promo",
	category: "Pokemon",

	dexId: [25],
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { en: "Let's Run Together!" },
			effect: { en: "Each player draws a card." }
		},
		{
			cost: ["Lightning", "Colorless", "Colorless"],
			name: { en: "Pika Bolt" },
			damage: 50
		}
	],

	weaknesses: [{ type: "Fighting", value: "×2" }],
	retreat: 1,
	description: { en: "It has small electric sacs on both its cheeks. When in a tough spot, this Pokémon discharges electricity." },
	regulationMark: "J",
	variants: [{ type: "normal" }]
}

export default card
