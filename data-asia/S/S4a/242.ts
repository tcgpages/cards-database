import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "バチンウニ"
	},
	illustrator: "Motofumi Fujiwara",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 80,
	types: [
		"Lightning"
	],
	stage: "Basic",
	dexId: [
		871
	],
	description: {
		ja: "棘の 先から 電気を 放つ。 鋭い 歯で 岩に ついた 海藻を こそいで 食べる。"
	},
	attacks: [
		{
			name: {
				ja: "ビリビリニードル"
			},
			effect: {
				ja: "コインを4回投げ、オモテの数×30ダメージ。オモテが2回以上なら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Lightning",
				"Lightning"
			],
			damage: "30×"
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
