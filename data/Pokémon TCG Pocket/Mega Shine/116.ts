import { Card } from "../../../interfaces"
import Set from "../Mega Shine"

const card: Card = {
	set: Set,
	name: {
		en: "Arboliva"
	},
	illustrator: "PLANETA Yamashita",
	rarity: "Crown",
	category: "Pokemon",
	dexId: [
		930
	],
	hp: 130,
	types: [
		"Grass"
	],
	evolveFrom: {
		en: "Dolliv"
	},
	stage: "Stage2",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Extra Heal"
			},
			effect: {
				en: "Once during your turn, you may heal 60 damage from 1 of your Pokémon ex that has any Energy attached. If you do, discard a random Energy from that Pokémon."
			}
		}
	],
	attacks: [
		{
			name: {
				en: "Seed Bomb"
			},
			damage: 70,
			cost: [
				"Colorless",
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		}
	],
	retreat: 2,
}

export default card
