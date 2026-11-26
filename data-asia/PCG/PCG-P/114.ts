import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ホロンエネルギーSYN:GL",
	},
	rarity: "Promo",
	category: "Energy",
	illustrator: "Takumi Akabane",
	energyType: "Special",
	effect: {
		ja: "このカードは★エネルギー1個ぶんとしてはたらく。\nこのカードをつけているポケモンに、\n{G}の基本エネルギーがついているなら、そのポケモンは、特殊状態にならず、そのポケモンが受けている特殊状態は、すべて消える。\n{L}の基本エネルギーがついているなら、そのポケモンが受ける相手のポケモンexのワザによるダメージは、「-10」される。\nこのカードがポケモンexについているなら、これらの効果はなくなる。",
	},
	variants: [
		{
			type: "holo",
		},
	],
}

export default card
