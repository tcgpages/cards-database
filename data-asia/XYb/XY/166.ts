import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ミステリーエネルギー"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Energy",
	energyType: "Special",
	effect: {
		ja: "このカードは超ポケモンにしかつけられず、ついているかぎり超エネルギー1個ぶんとしてはたらく。 このカードをつけている超ポケモンのにげるために必要なエネルギーは、2個ぶん少なくなる。 （このカードが超ポケモン以外についているなら、トラッシュする。）"
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
