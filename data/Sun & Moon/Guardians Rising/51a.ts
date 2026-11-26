import { Card } from "../../../interfaces"
import Set from "../Guardians Rising"

const card: Card = {
	name: { en: "Garbodor" },
	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [569],
	hp: 120,
	types: ["Psychic"],
	evolveFrom: { en: "Trubbish" },
	stage: "Stage1",

	attacks: [
		{
			cost: ["Psychic"],
			name: { en: "Trashalanche" },
			effect: { en: "This attack does 20 damage for each Item card in your opponent's discard pile." },
			damage: "20×"
		},
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: { en: "Acid Spray" },
			effect: { en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon." },
			damage: 70
		}
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 3,

	description: { en: "Beware the poisonous liquid it shoots from its right arm. If even a little of it gets on you, you'll experience the effects of the unidentified toxin." },

	variants: [
		{ type: "holo", foil: "cosmos" }
	],
	thirdParty: { tcgplayer: 191907 }
}

export default card
