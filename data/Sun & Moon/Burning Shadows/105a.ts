import { Card } from "../../../interfaces"
import Set from "../Burning Shadows"

const card: Card = {
	name: { en: "Porygon-Z" },
	illustrator: "Shin Nagasawa",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [474],
	hp: 130,
	types: ["Colorless"],
	evolveFrom: { en: "Porygon2" },
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { en: "Initialize" },
			effect: { en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may devolve each of your opponent's evolved Pokémon by putting the highest Stage Evolution card on it into your opponent's hand." }
		}
	],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: { en: "Zap Cannon" },
			effect: { en: "This Pokémon can't use Zap Cannon during your next turn." },
			damage: 80
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 2,

	description: { en: "In order to create a more advanced Pokémon, an additional program was installed, but apparently it contained a defect that makes it move oddly." },

	variants: [{ type: "holo", foil: "cosmos" }],
	thirdParty: { tcgplayer: 161362 }
}

export default card
