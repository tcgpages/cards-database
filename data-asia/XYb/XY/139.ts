import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "N"
	},
	illustrator: "Megumi Mizutani",
	rarity: "None",
	category: "Trainer",
	trainerType: "Supporter",
	effect: {
		ja: "おたがいのプレイヤーは、それぞれ、手札をすべて山札にもどし、山札を切る。その後、それぞれ、自分のサイドの残り枚数ぶん、山札を引く。"
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
