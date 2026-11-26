import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ルギア",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Mitsuhiro Arita",
	hp: 80,
	types: [
		"Psychic",
	],
	stage: "Basic",
	dexId: [
		249,
	],
	attacks: [
		{
			name: {
				ja: "ちょうねんりき",
			},
			cost: [
				"Psychic",
				"Colorless",
			],
			damage: 20,
		},
		{
			name: {
				ja: "エアロウイング",
			},
			effect: {
				ja: "のぞむなら、ダメージを与える前に、コインを1回投げてよい。オモテなら、このワザのダメージは「60」になる。ウラなら、このワザは失敗する。",
			},
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			damage: 30,
		},
	],
	weaknesses: [
		{
			type: "Psychic",
		},
	],
	retreat: 2,
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
