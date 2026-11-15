import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "破破袋",
		ja: "ヤブクロン"
	},

	illustrator: "Kyoko Umemoto",

	category: "Pokemon",

	hp: 70,

	types: [
		"Darkness"
	],

	description: {
		'zh-tw': "喜歡不衛生的地方。如果不及時清理家裡的垃圾，破破袋就會過來居住。",
		ja: "不衛生な 場所が 好き。 ゴミで 汚したまま 放っておくと 部屋にも 現れて 棲みつく。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "挖到寶",
				ja: "ほりだしもの"
			},
			effect: {
				'zh-tw': "從自己的牌庫選擇1張物品卡，在給對手看過後加入手牌。並且重洗牌庫。",
				ja: "自分の山札からグッズを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
			},
			cost: [
				"Colorless",
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "污泥上投",
				ja: "ヘドロなげ"
			},
			damage: 30,
			cost: [
				"Darkness",
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

	retreat: 2,

	regulationMark: "D",

	rarity: "Common",

	dexId: [
		568
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
