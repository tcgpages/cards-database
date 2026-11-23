import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "アララギ博士"
	},
	variants: [{ type: "reverse" }],
	rarity: "Promo",
	illustrator: "Ken Sugimori",
	category: "Trainer",
	trainerType: "Supporter",
	effect: {
		ja: "自分の手札をすべてトラッシュし、山札を7枚引く。"
	}
}

export default card
