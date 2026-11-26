import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Mega Slowbro ex"
	},
	illustrator: "PLANETA Yamashita",
	rarity: "Two Star",
	category: "Pokemon",
	dexId: [
		80
	],
	hp: 200,
	types: [
		"Water"
	],
	evolveFrom: {
		en: "Slowpoke"
	},
	stage: "Stage1",
	suffix: "EX",
	attacks: [
		{
			name: {
				en: "Laundry-Go-Round"
			},
			damage: 90,
			cost: [
				"Water",
				"Water",
				"Colorless"
			],
			effect: {
				en: "Flip 3 coins. This attack also does 20 damage for each heads to each of your opponent's Benched Pokémon."
			}
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		}
	],
	retreat: 3,
}

export default card
