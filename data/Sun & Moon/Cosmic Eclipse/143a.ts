import { Card } from "../../../interfaces"
import Set from "../Cosmic Eclipse"

const card: Card = {
	name: { en: "Togepi & Cleffa & Igglybuff-GX" },
	illustrator: "0313",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [173, 174, 175],
	hp: 240,
	types: ["Fairy"],
	stage: "Basic",
	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: ["Fairy", "Fairy", "Colorless"],
			name: { en: "Rolling Panic" },
			effect: { en: "Flip a coin until you get tails. This attack does 30 more damage for each heads." },
			damage: "120+"
		},
		{
			cost: ["Fairy", "Fairy"],
			name: { en: "Supreme Puff-GX" },
			effect: { en: "Take another turn after this one. (Skip the between-turns step.) If this Pokémon has at least 14 extra Fairy Energy attached to it (in addition to this attack's cost), your opponent shuffles all of their Benched Pokémon and all cards attached to them into their deck. (You can't use more than 1 GX attack in a game.)" }
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
	retreat: 2,

	variants: [{ type: "holo" }],
	thirdParty: { tcgplayer: 226129 }
}

export default card
