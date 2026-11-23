import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ガラルニャイキング"
	},
	rarity: "Ultra Rare",
	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 120,
	types: [
		"Metal"
	],
	stage: "Stage1",
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "はがねのせいしん"
			},
			effect: {
				ja: "このポケモンがいるかぎり、自分の鋼ポケモンが使うワザの、相手のバトルポケモンへのダメージは「＋20」される。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "メタルクロー"
			},
			cost: [
				"Metal",
				"Metal",
				"Colorless"
			],
			damage: 70
		}
	],
	evolveFrom: {
		ja: "ガラルニャース"
	},
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
	retreat: 2,
	regulationMark: "D",
	variants: [
		{
			type: "holo"
		}
	],
	dexId: [
		863
	]
}

export default card
