import { Card } from "../../../interfaces"
import Set from "../McDonald's Collection 2026"

const card: Card = {
	set: Set,
	name: { en: "Zoroark" },
	illustrator: "akagi",
	rarity: "None",
	category: "Pokemon",

	dexId: [571],
	hp: 120,
	types: ["Darkness"],
	stage: "Stage1",
	evolveFrom: { en: "Zorua" },

	attacks: [
		{
			cost: ["Darkness"],
			name: { en: "Mind Jack" },
			damage: "30×",
			effect: { en: "This attack does 30 damage for each of your opponent's Benched Pokémon." }
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: { en: "Foul Play" },
			effect: { en: "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack." }
		}
	],

	weaknesses: [{ type: "Grass", value: "×2" }],
	retreat: 1,
	description: { en: "Bonds between these Pokémon are very strong. It protects the safety of its pack by tricking its opponents." },
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: { tcgplayer: 730426 }
		}
	]
}

export default card
