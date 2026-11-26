import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "スプラッシュエネルギー"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Energy",
	energyType: "Special",
	effect: {
		ja: "このカードは水ポケモンにしかつけられず、ついているかぎり水エネルギー1個ぶんとしてはたらく。 このカードをつけている水ポケモンが、相手のポケモンからワザのダメージを受けてきぜつしたとき、トラッシュせずに手札にもどす。（ポケモン以外のカードは、すべてトラッシュする。） （このカードが水ポケモン以外についているなら、トラッシュする。）"
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
