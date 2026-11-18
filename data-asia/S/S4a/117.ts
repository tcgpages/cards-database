import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伊裴爾塔爾",
		ja: "イベルタル"
	},

	illustrator: "Hasuno",

	category: "Pokemon",

	hp: 110,

	types: [
		"Darkness"
	],

	description: {
		'zh-tw': "據說當生命走到盡頭時，會吸光所有生物的生命，回到繭的狀態。",
		ja: "寿命が つきるとき あらゆる 生き物の 命を 吸いつくし 繭の 姿に 戻るという。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "奇幻之死",
				ja: "アメイジングデス"
			},
			effect: {
				'zh-tw': "將對手的戰鬥寶可夢【氣絕】。",
				ja: "相手のバトルポケモンをきぜつさせる。"
			},
			cost: [
				"Fire",
				"Psychic",
				"Darkness",
				"Colorless",
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

	resistances: [
		{
			type: "Fighting",
			value: "₋30"
		}
	],

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		717
	]
}

export default card
