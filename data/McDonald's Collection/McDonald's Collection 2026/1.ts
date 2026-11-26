import { Card } from "../../../interfaces"
import Set from "../McDonald's Collection 2026"

const card: Card = {
	set: Set,
	name: { en: "Decidueye" },
	illustrator: "DOM",
	rarity: "None",
	category: "Pokemon",

	dexId: [724],
	hp: 150,
	types: ["Grass"],
	stage: "Stage2",
	evolveFrom: { en: "Dartrix" },

	attacks: [
		{
			cost: ["Colorless"],
			name: { en: "Stock Up on Feathers" },
			effect: { en: "Draw cards until you have 7 cards in your hand." }
		},
		{
			cost: ["Grass"],
			name: { en: "Power Shot" },
			damage: 170,
			effect: { en: "Discard a Basic {G} Energy card from your hand. If you can't, this attack does nothing." }
		}
	],

	weaknesses: [{ type: "Fire", value: "×2" }],
	retreat: 2,
	description: { en: "As if wielding a bow, it launches the arrow quills hidden among the feathers of its wings. Decidueye's shots never miss." },
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: { tcgplayer: 730416 }
		}
	]
}

export default card
