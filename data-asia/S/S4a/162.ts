import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "足量水桶",
		ja: "たっぷりバケツ"
	},

	illustrator: "sadaji",

	category: "Trainer",

	effect: {
		'zh-tw': "從自己的牌庫選擇最多2張【水】能量卡，在給對手看過後加入手牌。並且重洗牌庫。",
		ja: "自分の山札から水エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。"
	},

	trainerType: "Item",

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	]
}

export default card
