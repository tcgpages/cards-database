import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ヒュウ"
	},
	variants: [{ type: "reverse" }],
	rarity: "Promo",
	illustrator: "Yusuke Ohmura",
	category: "Trainer",
	trainerType: "Supporter",
	effect: {
		ja: "おたがいのプレイヤーは、それぞれ、自分の手札を5枚にする。（多いなら手札をトラッシュし、少ないなら山札を引く。5枚にするのは相手から。）"
	}
}

export default card
