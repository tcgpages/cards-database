import { Card } from "../../../interfaces"
import Set from "../SM Black Star Promos"

const card: Card = {
	name: { en: "Lunala-GX" },
	illustrator: "PLANETA Igarashi",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [792],
	hp: 230,
	types: ["Psychic"],
	evolveFrom: { en: "Cosmoem" },
	stage: "Stage2",
	suffix: "GX",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { en: "Glide" },
			damage: 50
		},
		{
			cost: ["Psychic", "Psychic", "Colorless", "Colorless"],
			name: { en: "Lunar Javelin" },
			effect: { en: "Discard 2 Psychic Energy from this Pokémon." },
			damage: 200
		},
		{
			cost: ["Psychic", "Psychic", "Psychic", "Colorless"],
			name: { en: "Requiem-GX" },
			effect: { en: "(You can't use more than 1 GX attack in a game.)" },
			damage: 250
		}
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		}
	],
	retreat: 0,

	variants: [{ type: "holo" }],
	thirdParty: { tcgplayer: 202636 }
}

export default card
