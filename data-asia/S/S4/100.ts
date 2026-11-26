import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "塗層鋼能量",
		ja: "コーティング鋼エネルギー"
	},

	category: "Energy",

	effect: {
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【鋼】能量。 附有這張卡的【鋼】寶可夢的弱點全部消除。",
		ja: "このカードは、ポケモンについているかぎり、鋼エネルギー1個ぶんとしてはたらく。 このカードをつけている鋼ポケモンの弱点は、すべてなくなる。"
	},

	energyType: "Special",

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
