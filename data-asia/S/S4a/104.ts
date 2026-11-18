import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "瓦斯彈",
		ja: "ドガース"
	},

	illustrator: "Pani Kobayashi",

	category: "Pokemon",

	hp: 60,

	types: [
		"Darkness"
	],

	description: {
		'zh-tw': "身體裡充滿了毒氣。會為了尋求廚餘垃圾的腐敗氣味而來到垃圾場。",
		ja: "毒ガスで パンパンの 体。 生ゴミの 腐った においを 求め ゴミ捨て場に やってくる。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "覺醒",
				ja: "かくせい"
			},
			effect: {
				'zh-tw': "從自己的牌庫選擇1張從這隻寶可夢進化而來的卡，放置於這隻寶可夢身上完成進化。並且重洗牌庫。",
				ja: "このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。"
			},
			cost: [
				"Darkness"
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
		109
	]
}

export default card
