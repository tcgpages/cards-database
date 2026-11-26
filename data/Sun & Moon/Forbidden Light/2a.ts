import { Card } from "../../../interfaces"
import Set from "../Forbidden Light"

const card: Card = {
	name: { en: "Alolan Exeggutor" },
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [103],
	hp: 160,
	types: ["Grass"],
	evolveFrom: { en: "Exeggcute" },
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass"],
			name: { en: "Tropical Shake" },
			effect: { en: "This attack does 20 more damage for each type of basic Energy card in your discard pile. You can't add more than 100 damage in this way." },
			damage: "20+"
		}
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 3,

	description: { en: "As it grew taller and taller, it outgrew its reliance on psychic powers, while within it awakened the power of the sleeping dragon." },

	variants: [{ type: "holo" }],
	thirdParty: { tcgplayer: 180514 }
}

export default card
