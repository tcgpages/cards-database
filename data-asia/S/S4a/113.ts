import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "不良蛙",
		ja: "グレッグル"
	},

	illustrator: "otumami",

	category: "Pokemon",

	hp: 70,

	types: [
		"Darkness"
	],

	description: {
		'zh-tw': "會從自己臉頰上的毒囊發出聲音來威嚇對手，趁對手畏懼的時候使出毒擊。",
		ja: "頬の 毒袋を 鳴らして 敵を 威嚇。 ひるんだ 隙に 毒突きを おみまいする。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "踩",
				ja: "ふむ"
			},
			damage: 10,
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "撞倒",
				ja: "つきたおし"
			},
			damage: 30,
			cost: [
				"Darkness",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],

	retreat: 1,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		453
	]
}

export default card
