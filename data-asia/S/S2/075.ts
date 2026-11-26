import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ダイオウドウV"
	},
	rarity: "Double rare",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: [
		"Metal"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				ja: "こんごうプレス"
			},
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。"
			},
			cost: [
				"Metal",
				"Metal",
				"Colorless"
			],
			damage: 90
		},
		{
			name: {
				ja: "たたきつぶす"
			},
			cost: [
				"Metal",
				"Metal",
				"Metal",
				"Colorless"
			],
			damage: 180
		}
	],
	suffix: "V",
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Grass",
			value: "－30"
		}
	],
	retreat: 4,
	regulationMark: "D",
	variants: [
		{
			type: "holo"
		}
	],
	dexId: [
		879
	]
}

export default card
