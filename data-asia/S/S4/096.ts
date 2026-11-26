import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "露璃娜",
		ja: "ルリナ"
	},

	illustrator: "take",

	category: "Trainer",

	effect: {
		'zh-tw': "從自己的棄牌區選擇【水】寶可夢卡與【水】能量卡合計最多4張，在給對手看過後加入手牌。",
		ja: "自分のトラッシュから水ポケモンと水エネルギーを合計4枚まで選び、相手に見せて、手札に加える。"
	},

	trainerType: "Supporter",

	regulationMark: "D",

	rarity: "Uncommon",

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
