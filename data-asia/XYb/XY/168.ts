import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "バッドエネルギー"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Energy",
	energyType: "Special",
	effect: {
		ja: "このカードは悪ポケモンにしかつけられず、ついているかぎり悪エネルギー1個ぶんとしてはたらく。 このカードをつけている悪ポケモンが、バトル場で相手の「ポケモンEX」からワザのダメージを受けるたび、ワザを使った「ポケモンEX」にダメカンを2個のせる。 （このカードが悪ポケモン以外についているなら、トラッシュする。）"
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
