import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ワンダーエネルギー"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Energy",
	energyType: "Special",
	effect: {
		ja: "このカードは妖ポケモンにしかつけられず、ついているかぎり妖エネルギー1個ぶんとしてはたらく。 このカードをつけている妖ポケモンは、相手のポケモンが使うワザの効果を受けない。（すでに受けている効果はなくならない。） （このカードが妖ポケモン以外についているなら、トラッシュする。）"
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
