import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "聶梓",
		ja: "ネズ"
	},

	illustrator: "take",

	category: "Trainer",

	effect: {
		'zh-tw': "從自己的牌庫選擇【惡】寶可夢卡與能量卡各1張，在給對手看過後加入手牌。並且重洗牌庫。",
		ja: "自分の山札から悪ポケモンとエネルギーを1枚ずつ選び、相手に見せて、手札に加える。そして山札を切る。"
	},

	trainerType: "Supporter",

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	]
}

export default card
