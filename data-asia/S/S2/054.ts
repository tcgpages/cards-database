import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ドジョッチ"
	},
	rarity: "Common",
	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 70,
	types: [
		"Fighting"
	],
	stage: "Basic",
	dexId: [
		339
	],
	description: {
		ja: "ぬるぬるの 体は 掴みにくい。 ある 地方では 泥が 固まって ドジョッチが 生まれたと いわれる。"
	},
	attacks: [
		{
			name: {
				ja: "ひれカッター"
			},
			cost: [
				"Fighting"
			],
			damage: 10
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
