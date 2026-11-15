import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ラビフット"
	},
	illustrator: "Lee HyunJung",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: [
		"Fire"
	],
	stage: "Stage1",
	dexId: [
		814
	],
	description: {
		ja: "手を 使わずに 木の 枝から 木の実を 摘み取り リフティング。 足技を 磨く 練習。"
	},
	attacks: [
		{
			name: {
				ja: "ニトロチャージ"
			},
			effect: {
				ja: "自分の山札から炎エネルギーを1枚選び、このポケモンにつける。そして山札を切る。"
			},
			cost: [
				"Fire"
			],
			damage: 20
		},
		{
			name: {
				ja: "マグナムキック"
			},
			cost: [
				"Fire",
				"Fire",
				"Colorless"
			],
			damage: 70
		}
	],
	weaknesses: [
		{
			type: "Water",
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
