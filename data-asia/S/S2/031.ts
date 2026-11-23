import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "エレブー"
	},
	rarity: "Common",
	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 90,
	types: [
		"Lightning"
	],
	stage: "Basic",
	dexId: [
		125
	],
	description: {
		ja: "停電が 起こる 原因に されることが 多いが 実は 会社の ミスの ほうが多い。"
	},
	attacks: [
		{
			name: {
				ja: "げんこつ"
			},
			cost: [
				"Colorless"
			],
			damage: 10
		},
		{
			name: {
				ja: "エレキスラッグ"
			},
			cost: [
				"Lightning",
				"Lightning",
				"Colorless"
			],
			damage: 70
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
			type: "normal"
		}
	]
}

export default card
