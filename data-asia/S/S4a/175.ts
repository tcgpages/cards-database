import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "阿球",
		ja: "ボールガイ"
	},

	illustrator: "Hitoshi Ariga",

	category: "Trainer",

	effect: {
		'zh-tw': "從自己的牌庫選擇最多3張名稱中有「球」，名稱各不同的物品卡，在給對手看過後加入手牌。並且重洗牌庫。",
		ja: "自分の山札から、名前に「ボール」とつく、それぞれちがう名前のグッズを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。"
	},

	trainerType: "Supporter",

	regulationMark: "D",

	rarity: "None"
}

export default card
