import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ホロンエネルギーSYN:WP",
	},
	rarity: "Promo",
	category: "Energy",
	illustrator: "Takumi Akabane",
	energyType: "Special",
	effect: {
		ja: "このカードは★エネルギー1個ぶんとしてはたらく。\nこのカードをつけているポケモンに、\n{W}の基本エネルギーがついているなら、そのポケモンは、相手のワザによる効果を受けない。\n{P}の基本エネルギーがついているなら、そのポケモンのにげるに必要なエネルギーは、すべてなくなる。\nこのカードがポケモンexについているなら、これらの効果はなくなる。",
	},
	variants: [
		{
			type: "holo",
		},
	],
}

export default card
