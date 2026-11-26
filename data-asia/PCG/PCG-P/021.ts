import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "スクランブルエネルギー",
	},
	rarity: "Promo",
	category: "Energy",
	illustrator: "Takumi Akabane",
	energyType: "Special",
	effect: {
		ja: "このカードは、「進化ポケモン（ポケモンexはのぞく）」につけることができ、★エネルギー1個ぶんとしてはたらく。\n自分のサイドの枚数が、相手のサイドの枚数より多いなら、このカードは、ポケモンについているかぎり、すべてのタイプのエネルギー3個ぶんとしてはたらく（特殊エネルギーの効果は含まれない）。\n「進化ポケモン（ポケモンexはのぞく）」についていないなら、このカードをトラッシュする。",
	},
	variants: [
		{
			type: "holo",
		},
	],
}

export default card
