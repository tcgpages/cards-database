import { Card } from "../../../interfaces"
import Set from "../Pokémon TCG Classic (Venusaur & Lugia ex Deck)"

const card: Card = {
	set: Set,
	name: { en: "Hitmonlee" },
	illustrator: "Shigenori Negishi",
	rarity: "None",
	category: "Pokemon",

	dexId: [106],
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { en: "Low Sweep" },
			damage: 40
		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: { en: "Coordinated Strike" },
			damage: "80+",
			effect: { en: "If Hitmonchan is on your Bench, this attack does 80 more damage." }
		}
	],

	weaknesses: [{ type: "Psychic", value: "×2" }],
	retreat: 1,
	description: { en: "The legs freely contract and stretch. The stretchy legs allow it to hit a distant foe with a rising kick." },

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 527898 }
		}
	]
}

export default card
