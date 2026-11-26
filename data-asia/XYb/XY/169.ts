import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "シールドエネルギー"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Energy",
	energyType: "Special",
	effect: {
		ja: "このカードは鋼ポケモンにしかつけられず、ついているかぎり鋼エネルギー1個ぶんとしてはたらく。 このカードをつけている鋼ポケモンが、相手のポケモンから受けるワザのダメージは「-10」される。 （このカードが鋼ポケモン以外についているなら、トラッシュする。）"
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
