import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ベル"
	},
	variants: [{ type: "reverse" }],
	rarity: "Promo",
	illustrator: "Megumi Mizutani",
	category: "Trainer",
	trainerType: "Supporter",
	effect: {
		ja: "自分の手札が6枚になるように、山札を引く。"
	}
}

export default card
