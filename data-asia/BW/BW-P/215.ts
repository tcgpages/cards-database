import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "カトレア"
	},
	variants: [{ type: "reverse" }],
	rarity: "Promo",
	illustrator: "Yusuke Ohmura",
	category: "Trainer",
	trainerType: "Supporter",
	effect: {
		ja: "自分の手札を好きなだけ選び、好きな順番に入れ替えて、山札の下にもどす。その後、もどした枚数ぶん、自分の山札を引く。"
	}
}

export default card
