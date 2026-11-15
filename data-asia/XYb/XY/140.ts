import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "オカルトマニア"
	},
	illustrator: "Yusuke Ohmura",
	rarity: "None",
	category: "Trainer",
	trainerType: "Supporter",
	effect: {
		ja: "次の相手の番の終わりまで、おたがいの場・手札・トラッシュのカードに書かれている特性は、すべてなくなる。（新しく場に出したカードもふくむ。）"
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
