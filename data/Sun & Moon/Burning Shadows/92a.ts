import { Card } from "../../../interfaces"
import Set from "../Burning Shadows"

const card: Card = {
	name: { en: "Kirlia" },
	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [281],
	hp: 80,
	types: ["Fairy"],
	evolveFrom: { en: "Ralts" },
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: { en: "Smack" },
			damage: 20
		},
		{
			cost: ["Fairy", "Colorless"],
			name: { en: "Magical Shot" },
			damage: 30
		}
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		}
	],
	retreat: 1,

	description: { en: "The cheerful spirit of its Trainer gives it energy for its psychokinetic power. It spins and dances when happy." },

	variants: [{ type: "holo", foil: "cosmos" }],
	thirdParty: { tcgplayer: 171033 }
}

export default card
