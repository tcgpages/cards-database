import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "バーニングエネルギー"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Energy",
	energyType: "Special",
	effect: {
		ja: "このカードは炎ポケモンにしかつけられず、ついているかぎり炎エネルギー1個ぶんとしてはたらく。 このカードをつけている炎ポケモンのワザで、このカードがトラッシュされたなら、ダメージや効果のあと、もとのポケモンにつけなおす。 （このカードが炎ポケモン以外についているなら、トラッシュする。）"
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
