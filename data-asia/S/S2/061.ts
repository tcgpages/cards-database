import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "タイレーツV"
	},
	rarity: "Double rare",
	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 160,
	types: [
		"Fighting"
	],
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "てっぺきのじん"
			},
			effect: {
				ja: "このポケモンがいるかぎり、自分の場の、名前に「タイレーツ」とつくポケモン全員が、相手のポケモンから受けるワザのダメージは「-20」される。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "ギガインパクト"
			},
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。"
			},
			cost: [
				"Fighting",
				"Fighting",
				"Colorless"
			],
			damage: 210
		}
	],
	suffix: "V",
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
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
		870
	]
}

export default card
