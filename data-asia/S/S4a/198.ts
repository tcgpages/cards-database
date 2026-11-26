import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "マリィ"
	},
	illustrator: "Naoki Saito",
	rarity: "Ultra Rare",
	category: "Trainer",
	trainerType: "Supporter",
	effect: {
		ja: "おたがいのプレイヤーは、それぞれ自分の手札をすべてウラにして切り、山札の下にもどす。その後、自分は5枚、相手は4枚、山札を引く。"
	},
	regulationMark: "D",
	variants: [
		{
			type: "holo",
			languages: [
				"ja"
			]
		}
	]
}

export default card
