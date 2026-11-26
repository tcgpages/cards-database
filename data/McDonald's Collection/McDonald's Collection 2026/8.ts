import { Card } from "../../../interfaces"
import Set from "../McDonald's Collection 2026"

const card: Card = {
	set: Set,
	name: { en: "Tyranitar" },
	illustrator: "hncl",
	rarity: "None",
	category: "Pokemon",

	dexId: [248],
	hp: 180,
	types: ["Darkness"],
	stage: "Stage2",
	evolveFrom: { en: "Pupitar" },

	attacks: [
		{
			cost: ["Darkness"],
			name: { en: "Rout" },
			damage: "30+",
			effect: { en: "This attack does 30 more damage for each of your opponent's Benched Pokémon." }
		},
		{
			cost: ["Darkness", "Darkness"],
			name: { en: "Dread Mountain" },
			damage: 230,
			effect: { en: "Discard the top 4 cards of your deck." }
		}
	],

	weaknesses: [{ type: "Grass", value: "×2" }],
	retreat: 3,
	description: { en: "Extremely strong, it can change the landscape. It is so insolent that it doesn't care about others." },
	regulationMark: "G",

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 730423 }
		}
	]
}

export default card
