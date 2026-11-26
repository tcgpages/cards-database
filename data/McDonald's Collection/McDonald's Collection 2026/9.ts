import { Card } from "../../../interfaces"
import Set from "../McDonald's Collection 2026"

const card: Card = {
	set: Set,
	name: { en: "Absol" },
	illustrator: "rika",
	rarity: "None",
	category: "Pokemon",

	dexId: [359],
	hp: 110,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: { en: "Darkfall" },
			damage: "20+",
			effect: { en: "If you have at least 3 {D} Energy in play, this attack does 50 more damage." }
		}
	],

	weaknesses: [{ type: "Grass", value: "×2" }],
	retreat: 1,
	description: { en: "Swift as the wind, Absol races through fields and mountains. Its curved, bow-like horn is acutely sensitive to the warning signs of natural disasters." },
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: { tcgplayer: 730424 }
		}
	]
}

export default card
