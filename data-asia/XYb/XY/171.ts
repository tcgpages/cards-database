import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ダブルドラゴンエネルギー"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Energy",
	energyType: "Special",
	effect: {
		ja: "このカードは竜ポケモンにしかつけられず、ついているかぎりすべてのタイプのエネルギー2個ぶんとしてはたらく。 （このカードが竜ポケモン以外についているなら、トラッシュする。）"
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
