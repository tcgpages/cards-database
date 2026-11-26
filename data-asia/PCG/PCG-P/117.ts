import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "バトルロードスタジアム",
	},
	rarity: "Promo",
	category: "Trainer",
	illustrator: "Ryo Ueda",
	trainerType: "Stadium",
	effect: {
		ja: "おたがいのプレイヤーは、それぞれ、自分の番の終わりに、自分の手札が8枚以上なら、その手札が7枚になるまでカードを選び、トラッシュする。",
	},
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
