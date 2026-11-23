import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ノズパス"
	},
	rarity: "Common",
	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 80,
	types: [
		"Fighting"
	],
	stage: "Basic",
	dexId: [
		299
	],
	description: {
		ja: "強力な 磁力で 獲物を 引き寄せ 動かず 狩りを するが 天敵を 引き寄せることもある。"
	},
	attacks: [
		{
			name: {
				ja: "たいあたり"
			},
			cost: [
				"Colorless"
			],
			damage: 10
		},
		{
			name: {
				ja: "ころがりタックル"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 50
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 3,
	regulationMark: "D",
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
