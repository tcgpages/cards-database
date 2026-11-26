import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "プラターヌ博士"
	},
	illustrator: "Yusuke Ohmura",
	rarity: "None",
	category: "Trainer",
	trainerType: "Supporter",
	effect: {
		ja: "自分の手札をすべてトラッシュし、山札を7枚引く。"
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
