import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "みがわりロボ（フレア団ギア）"
	},
	illustrator: "Toyste Beach",
	rarity: "None",
	category: "Trainer",
	trainerType: "Item",
	effect: {
		ja: "このカードは、HP30の無タイプのたねポケモンとして、場に出すことができる。 自分の番の中でなら、場に出ているこのカードをトラッシュしてよい。 このカードは、にげられない。このカードがきぜつしても、相手はサイドをとれない。"
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
