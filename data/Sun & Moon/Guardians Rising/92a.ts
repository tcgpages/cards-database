import { Card } from "../../../interfaces"
import Set from "../Guardians Rising"

const card: Card = {
	name: { en: "Sylveon-GX" },
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [700],
	hp: 200,
	types: ["Fairy"],
	evolveFrom: { en: "Eevee" },
	stage: "Stage1",
	suffix: "GX",

	attacks: [
		{
			cost: ["Fairy"],
			name: { en: "Magical Ribbon" },
			effect: { en: "Search your deck for up to 3 cards and put them into your hand. Then, shuffle your deck." }
		},
		{
			cost: ["Fairy", "Colorless", "Colorless"],
			name: { en: "Fairy Wind" },
			damage: 110
		},
		{
			cost: ["Fairy", "Colorless", "Colorless"],
			name: { en: "Plea-GX" },
			effect: { en: "Put 2 of your opponent's Benched Pokémon and all cards attached to them into your opponent's hand. (You can't use more than 1 GX attack in a game.)" }
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

	variants: [{ type: "holo", foil: "mirror" }],
	thirdParty: { tcgplayer: 177113 }
}

export default card
