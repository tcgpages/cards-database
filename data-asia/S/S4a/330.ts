import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ザマゼンタV"
	},
	illustrator: "aky CG Works",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 230,
	types: [
		"Metal"
	],
	dexId: [
		889
	],
	stage: "Basic",
	suffix: "V",
	abilities: [
		{
			name: {
				ja: "ふくつのたて"
			},
			effect: {
				ja: "このポケモンは、相手の「ポケモンVMAX」からワザのダメージを受けない。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "アサルトタックル"
			},
			effect: {
				ja: "相手のバトルポケモンについている特殊エネルギーを1個選び、トラッシュする。"
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
	retreat: 2,
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
