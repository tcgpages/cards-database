import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ストロングエネルギー"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Energy",
	energyType: "Special",
	effect: {
		ja: "このカードは闘ポケモンにしかつけられず、ついているかぎり闘エネルギー1個ぶんとしてはたらく。 このカードをつけている闘ポケモンが使うワザの、相手のバトルポケモンへのダメージは、「+20」される。 （このカードが闘ポケモン以外についているなら、トラッシュする。）"
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
