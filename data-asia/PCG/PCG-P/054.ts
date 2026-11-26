import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ダークメタルエネルギー",
	},
	rarity: "Promo",
	category: "Energy",
	illustrator: "Takumi Akabane",
	energyType: "Special",
	effect: {
		ja: "このカードは、ポケモンについているかぎり、{D}と{M}の2つのタイプを持つエネルギー1個ぶんとしてはたらく。（特殊エネルギーの効果は含まれない。）",
	},
	variants: [
		{
			type: "holo",
		},
	],
}

export default card
