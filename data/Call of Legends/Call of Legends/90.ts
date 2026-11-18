import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Water Energy",
		fr: "Énergie Eau",
		de: "Wasserenergie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	cameoDexIds: [249],
	stage: "Basic",
	energyType: "Normal",

	types: [
		"Water"
	],
	retreat: 0,
	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90525,
				cardmarket: 279733
			},
		},
	],

}

export default card
