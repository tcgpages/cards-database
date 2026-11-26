import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ホロンエネルギーSYN:FF",
	},
	rarity: "Promo",
	category: "Energy",
	illustrator: "Takumi Akabane",
	energyType: "Special",
	effect: {
		ja: "このカードは★エネルギー1個ぶんとしてはたらく。\nこのカードをつけているポケモンに、\n{R}の基本エネルギーがついているなら、そのポケモンの弱点は、すべてなくなる。\n{F}の基本エネルギーがついているなら、そのポケモンのワザは、相手のポケモンの抵抗力に関係なく、ダメージを与える。\nこのカードがポケモンexについているなら、これらの効果はなくなる。",
	},
	variants: [
		{
			type: "holo",
		},
	],
}

export default card
