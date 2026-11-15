import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "マホミル"
	},
	illustrator: "Motofumi Fujiwara",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 50,
	types: [
		"Psychic"
	],
	stage: "Basic",
	dexId: [
		868
	],
	description: {
		ja: "クリームで できた 体を もつ。 空気中の 甘い 香りの 成分が 集まって 生まれた。"
	},
	attacks: [
		{
			name: {
				ja: "アロマセラピー"
			},
			effect: {
				ja: "自分のポケモン全員のHPを、それぞれ「10」回復する。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "たいあたり"
			},
			cost: [
				"Psychic",
				"Colorless"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	retreat: 1,
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
