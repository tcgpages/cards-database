import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Magmortar"
	},
	illustrator: "AKIRA EGAWA",
	rarity: "Two Diamond",
	category: "Pokemon",
	dexId: [
		467
	],
	hp: 130,
	types: [
		"Fire"
	],
	evolveFrom: {
		en: "Magmar"
	},
	stage: "Stage1",
	attacks: [
		{
			name: {
				en: "Thundering Volcano"
			},
			damage: 70,
			cost: [
				"Fire",
				"Colorless",
				"Colorless"
			],
			effect: {
				en: "If Electivire is on your Bench, this attack also does 20 damage to each of your opponent's Benched Pokémon."
			}
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		}
	],
	retreat: 2,
}

export default card
