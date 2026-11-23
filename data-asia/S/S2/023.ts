import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "オタマロ"
	},
	rarity: "Common",
	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 60,
	types: [
		"Water"
	],
	stage: "Basic",
	dexId: [
		535
	],
	description: {
		ja: "きれいな 波紋が 広がる 水の 下では オタマロが 甲高い 声で 鳴いている。"
	},
	attacks: [
		{
			name: {
				ja: "くるくる"
			},
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。"
			},
			cost: [
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Lightning",
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
