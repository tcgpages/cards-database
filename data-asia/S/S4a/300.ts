import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ココガラ"
	},
	illustrator: "Lee HyunJung",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: [
		"Colorless"
	],
	stage: "Basic",
	dexId: [
		821
	],
	description: {
		ja: "どんな 強敵にも 挑みかかる 勇敢な 性質。 返り討ちに 遭いながらも 鍛えられていく。"
	},
	attacks: [
		{
			name: {
				ja: "はばたく"
			},
			cost: [
				"Colorless"
			],
			damage: 10
		},
		{
			name: {
				ja: "かっくう"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
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
