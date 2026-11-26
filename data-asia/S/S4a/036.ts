import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蓋歐卡",
		ja: "カイオーガ"
	},

	illustrator: "Anesaki Dynamic",

	category: "Pokemon",

	hp: 120,

	types: [
		"Water"
	],

	description: {
		'zh-tw': "據說會用降下大雨的能力擴張海洋。一直沉睡在海溝的底部。",
		ja: "大雨を 降らせる 能力で 海を 広げたと 言われている。 海溝の 底で 眠っていた。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "奇幻巨浪",
				ja: "アメイジングサージ"
			},
			effect: {
				'zh-tw': "對手的所有寶可夢各受到80點傷害。[在備戰區不計算弱點・抵抗力。]",
				ja: "相手のポケモン全員に、それぞれ80ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
			},
			cost: [
				"Water",
				"Lightning",
				"Metal",
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

	retreat: 3,

	regulationMark: "D",

	rarity: "Amazing Rare",

	variants: [
		{ type: "holo", languages: ["ja"] }
	],

	dexId: [
		382
	]
}

export default card
