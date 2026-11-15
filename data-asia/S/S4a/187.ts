import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "極光能量",
		ja: "オーロラエネルギー"
	},

	category: "Energy",

	effect: {
		'zh-tw': "必須將自己的1張手牌丟棄才可從手牌將這張卡附於寶可夢身上。 只要這張卡附於寶可夢身上，視為提供1個所有屬性的能量。",
		ja: "このカードは、手札からポケモンにつけるとき、自分の手札を1枚トラッシュしなければつけられない。 このカードは、ポケモンについているかぎり、すべてのタイプのエネルギー1個ぶんとしてはたらく。"
	},

	energyType: "Special",

	regulationMark: "D",

	rarity: "None"
}

export default card
