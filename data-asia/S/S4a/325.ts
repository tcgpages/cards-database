import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "バイウールーV"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare V",
	category: "Pokemon",
	hp: 210,
	types: [
		"Colorless"
	],
	dexId: [
		832
	],
	stage: "Basic",
	suffix: "V",
	abilities: [
		{
			name: {
				ja: "やわらかウール"
			},
			effect: {
				ja: "このポケモンが受けるワザのダメージは「-30」される。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "リベンジバースト"
			},
			effect: {
				ja: "相手がすでにとったサイドの枚数×30ダメージ追加。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "120+"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
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
