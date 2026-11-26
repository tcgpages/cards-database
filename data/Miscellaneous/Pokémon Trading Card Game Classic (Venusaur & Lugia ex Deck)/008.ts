import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Venusaur & Lugia ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Sandshrew" },
	illustrator: "Sekio",
	rarity: "None",
	category: "Pokemon",

	dexId: [27],
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: { en: "Collect" },
			effect: { en: "Draw a card." }
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: { en: "Rolling Tackle" },
			damage: 30
		}
	],

	weaknesses: [{ type: "Grass", value: "×2" }],
	retreat: 1,
	description: { en: "It lives in areas of limited rainfall. When danger approaches, it curls up into a ball to protect its soft stomach." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527893 }
		}
	]
}

export default card
