import { Card } from "../../../interfaces"
import Set from "../McDonald's Collection 2026"

const card: Card = {
	set: Set,
	name: { en: "Lucario" },
	illustrator: "Nurikabe",
	rarity: "None",
	category: "Pokemon",

	dexId: [448],
	hp: 130,
	types: ["Fighting"],
	stage: "Stage1",
	evolveFrom: { en: "Riolu" },

	attacks: [
		{
			cost: ["Fighting"],
			name: { en: "Avenging Knuckle" },
			damage: "30+",
			effect: { en: "If any of your {F} Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 120 more damage." }
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: { en: "Accelerating Stab" },
			damage: 120,
			effect: { en: "During your next turn, this Pokémon can't use Accelerating Stab." }
		}
	],

	weaknesses: [{ type: "Psychic", value: "×2" }],
	retreat: 2,
	description: { en: "It's said that no foe can remain invisible to Lucario, since it can detect auras—even those of foes it could not otherwise see." },
	regulationMark: "G",

	variants: [
		{
			type: "holo",
			thirdParty: { tcgplayer: 730421 }
		}
	]
}

export default card
