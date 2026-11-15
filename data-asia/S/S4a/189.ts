import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雙子能量",
		ja: "ツインエネルギー"
	},

	category: "Energy",

	effect: {
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供2個【無】能量。 若附於「寶可夢【V】・【GX】」身上，則視為提供1個【無】能量。",
		ja: "このカードは、ポケモンについているかぎり、無エネルギー2個ぶんとしてはたらく。 「ポケモンV・GX」についているなら、無エネルギー1個ぶんとしてはたらく。"
	},

	energyType: "Special",

	regulationMark: "D",

	rarity: "None"
}

export default card
