import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "きんのたま"
	},
	rarity: "Uncommon",
	illustrator: "sadaji",
	category: "Trainer",
	trainerType: "Item",
	effect: {
		ja: "このカードは、自分の番のはじめに、山札からこのカードを引いたとき、手札に加える前に使う。 自分の山札を3枚引く。"
	},
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
