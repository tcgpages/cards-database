import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ストライク"
	},
	rarity: "Common",
	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 80,
	types: [
		"Grass"
	],
	stage: "Basic",
	dexId: [
		123
	],
	description: {
		ja: "鋭い ２つの カマは 単なる 武器では ない。 器用に 操り 獲物を さばいて 食らうのだ。"
	},
	attacks: [
		{
			name: {
				ja: "つるぎのまい"
			},
			effect: {
				ja: "次の自分の番、このポケモンの「こうそくカマ」のダメージは「+70」される。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "こうそくカマ"
			},
			cost: [
				"Colorless"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 1,
	regulationMark: "D",
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
