import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Blastoise & Suicune ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Articuno" },
	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",

	dexId: [144],
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	level: 35,

	attacks: [
		{
			cost: ["Water", "Water", "Water"],
			name: { en: "Freeze-Dry" },
			damage: 30,
			effect: { en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed." }
		},
		{
			cost: ["Water", "Water", "Water", "Water"],
			name: { en: "Blizzard" },
			damage: 50,
			effect: { en: "Flip a coin. If heads, this attack also does 10 damage to each of your opponent's Benched Pokémon. If tails, this attack also does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
		}
	],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 2,
	description: { en: "A legendary bird Pokémon that is said to appear to doomed people who are lost in icy mountains." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527996 }
		}
	]
}

export default card
