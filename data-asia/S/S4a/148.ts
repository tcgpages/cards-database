import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "貪心栗鼠",
		ja: "ホシガリス"
	},

	illustrator: "Mina Nakai",

	category: "Pokemon",

	hp: 70,

	types: [
		"Colorless"
	],

	description: {
		'zh-tw': "在伽勒爾隨處可見。如果不往兩邊的頰囊裡塞滿樹果，就會感到不安。",
		ja: "ガラルの いたるところに いる。 左右の ほっぺに 木の実を 蓄えていないと 不安。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "撞擊",
				ja: "たいあたり"
			},
			damage: 10,
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "咬住",
				ja: "かみつく"
			},
			damage: 20,
			cost: [
				"Colorless",
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
		819
	]
}

export default card
