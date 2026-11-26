import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ヒーリングエネルギー",
	},
	rarity: "Promo",
	category: "Energy",
	illustrator: "Takumi Akabane",
	energyType: "Special",
	effect: {
		ja: "このカードは★エネルギー1個ぶんとしてはたらく。\nこのカードを手札から出して、自分のポケモンにつけたとき、そのポケモンのダメージカウンターを1個とりのぞき、特殊状態をすべて回復させる。\nポケモンexにつけたなら、この効果はなくなる。",
	},
	variants: [
		{
			type: "holo",
		},
	],
}

export default card
