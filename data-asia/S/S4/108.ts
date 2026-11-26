import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,
	name: {
		ja: "ギルガルドV"
	},
	illustrator: "aky CG Works",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: [
		"Metal"
	],
	dexId: [
		681
	],
	stage: "Basic",
	suffix: "V",
	attacks: [
		{
			name: {
				ja: "きりさく"
			},
			cost: [
				"Metal",
				"Colorless"
			],
			damage: 50
		},
		{
			name: {
				ja: "ソニックエッジ"
			},
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。"
			},
			cost: [
				"Metal",
				"Metal",
				"Colorless"
			],
			damage: 130
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		}
	],
	retreat: 3,
	regulationMark: "D",
	variants: [
		{
			type: "holo",
			languages: [
				"ja"
			]
		}
	]
}

export default card
