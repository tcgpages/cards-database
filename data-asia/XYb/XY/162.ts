import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ハーブエネルギー"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Energy",
	energyType: "Special",
	effect: {
		ja: "このカードは草ポケモンにしかつけられず、ついているかぎり草エネルギー1個ぶんとしてはたらく。 このカードを手札から草ポケモンにつけたとき、そのポケモンのHPを「30」回復する。 （このカードが草ポケモン以外についているなら、トラッシュする。）"
	},
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
			foil: "mirror"
		}
	]
}

export default card
