import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "キャプチャーエネルギー"
	},
	rarity: "Uncommon",
	category: "Energy",
	energyType: "Special",
	effect: {
		ja: "このカードは、ポケモンについているかぎり、[無]エネルギー1個ぶんとしてはたらく。 このカードを手札からポケモンにつけたとき、自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。"
	},
	regulationMark: "D",
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
