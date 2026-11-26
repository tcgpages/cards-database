import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "搗蛋小妖",
		ja: "ベロバー"
	},

	illustrator: "Kouki Saitou",

	category: "Pokemon",

	hp: 70,

	types: [
		"Darkness"
	],

	description: {
		'zh-tw': "會用鼻子吸收人類或寶可夢情緒糟糕時產生的負能量，來為自己補充活力。",
		ja: "人や ポケモンが 嫌がる ときに 発する マイナスエネルギーを 鼻から 吸いこみ 元気になる。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "敲擊",
				ja: "たたく"
			},
			damage: 10,
			cost: [
				"Darkness"
			]
		},
		{
			name: {
				'zh-tw': "踩",
				ja: "ふむ"
			},
			damage: 20,
			cost: [
				"Darkness",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],

	retreat: 1,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	],

	dexId: [
		859
	]
}

export default card
