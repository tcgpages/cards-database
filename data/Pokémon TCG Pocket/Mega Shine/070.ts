import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Lapras"
	},
	illustrator: "zig",
	rarity: "One Star",
	category: "Pokemon",
	dexId: [
		131
	],
	hp: 100,
	types: [
		"Water"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				en: "Raging Freeze"
			},
			damage: 60,
			cost: [
				"Water",
				"Water",
				"Colorless"
			],
			effect: {
				en: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, your opponent's Active Pokémon is now Paralyzed."
			}
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		}
	],
	retreat: 2,
}

export default card
