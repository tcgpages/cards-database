import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "高速雷能量",
		ja: "スピード雷エネルギー"
	},

	category: "Energy",

	effect: {
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【雷】能量。 當從手牌將這張卡附於【雷】寶可夢身上時，從自己的牌庫抽出2張卡。",
		ja: "このカードは、ポケモンについているかぎり、雷エネルギー1個ぶんとしてはたらく。 このカードを手札から雷ポケモンにつけたとき、自分の山札を2枚引く。"
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
