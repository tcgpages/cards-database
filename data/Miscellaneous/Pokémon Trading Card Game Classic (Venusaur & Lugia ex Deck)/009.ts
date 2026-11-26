import { Card } from "../../../interfaces"
import Set from "../Pokémon Trading Card Game Classic (Venusaur & Lugia ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Sandslash" },
	illustrator: "Shigenori Negishi",
	rarity: "None",
	category: "Pokemon",

	dexId: [28],
	hp: 110,
	types: ["Fighting"],
	stage: "Stage1",
	evolveFrom: { en: "Sandshrew" },

	attacks: [
		{
			cost: ["Colorless"],
			name: { en: "Continuous Scratch" },
			damage: "30×",
			effect: { en: "Flip 4 coins. This attack does 30 damage for each heads." }
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: { en: "Sand Tomb" },
			damage: 90,
			effect: { en: "During your opponent's next turn, the Defending Pokémon can't retreat." }
		}
	],

	weaknesses: [{ type: "Grass", value: "×2" }],
	retreat: 1,
	description: { en: "Its claws and horns often break off. The broken claws and horns can be used to carve plows for tilling farm fields." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527894 }
		}
	]
}

export default card
