import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "土居忍士",
		ja: "ツチニン"
	},

	illustrator: "Sekio",

	category: "Pokemon",

	hp: 40,

	types: [
		"Grass"
	],

	description: {
		'zh-tw': "因為長時間生活在地底下，所以眼睛幾乎什麼都看不到。會靠觸角來探察周圍的狀況。",
		ja: "長い あいだ 地中で 暮らして いたため 目は ほとんど 見えない。 触角で 様子を 探る。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "吸取",
				ja: "すいとる"
			},
			effect: {
				'zh-tw': "將這隻寶可夢恢復「10」HP。",
				ja: "このポケモンのHPを「10」回復する。"
			},
			damage: 10,
			cost: [
				"Grass"
			]
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

	rarity: "Common",

	dexId: [
		290
	],

	variants: [
		{
			type: "normal",
			languages: [
				"ja"
			]
		}
	]
}

export default card
