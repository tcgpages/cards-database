import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "強力無能量",
		ja: "パワフル無色エネルギー"
	},

	category: "Energy",

	effect: {
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【無】能量。附有這張卡的【無】寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+20」點。",
		ja: "このカードは、ポケモンについているかぎり、無エネルギー1個ぶんとしてはたらく。 このカードをつけている無ポケモンが使うワザの、相手のバトルポケモンへのダメージは「+20」される。"
	},

	energyType: "Special",

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	]
}

export default card
