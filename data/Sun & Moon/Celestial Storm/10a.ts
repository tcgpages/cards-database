import { Card } from "../../../interfaces"
import Set from "../Celestial Storm"

const card: Card = {
	name: { en: "Sceptile" },
	illustrator: "Hitoshi Ariga",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [254],
	hp: 140,
	types: ["Grass"],
	evolveFrom: { en: "Grovyle" },
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { en: "Power of Nature" },
			effect: { en: "Prevent all damage done to your Pokémon that have any Grass Energy attached to them by attacks from your opponent's Ultra Beasts." }
		}
	],

	attacks: [
		{
			cost: ["Grass"],
			name: { en: "Powerful Storm" },
			effect: { en: "This attack does 20 damage times the amount of Energy attached to all of your Pokémon." },
			damage: "20×"
		}
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 1,

	description: { en: "It agilely leaps about the jungle and uses the sharp leaves on its arms to strike its prey." },

	variants: [{ type: "holo" }],
	thirdParty: { tcgplayer: 189786 }
}

export default card
