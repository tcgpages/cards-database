import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "スピード雷エネルギー"
	},
	rarity: "Uncommon",
	category: "Energy",
	energyType: "Special",
	effect: {
		ja: "このカードは、ポケモンについているかぎり、[雷]エネルギー1個ぶんとしてはたらく。 このカードを手札から[雷]ポケモンにつけたとき、自分の山札を2枚引く。"
	},
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
