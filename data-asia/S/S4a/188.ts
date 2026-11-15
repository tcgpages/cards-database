import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "捕獲能量",
		ja: "キャプチャーエネルギー"
	},

	category: "Energy",

	effect: {
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【無】能量。 當從手牌將這張卡附於寶可夢身上時，從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
		ja: "このカードは、ポケモンについているかぎり、無エネルギー1個ぶんとしてはたらく。 このカードを手札からポケモンにつけたとき、自分の山札からポケモンを1枚選び、ベンチに出す。そして山札を切る。"
	},

	energyType: "Special",

	regulationMark: "D",

	rarity: "None"
}

export default card
