import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "次元の谷"
	},
	illustrator: "Ryo Ueda",
	rarity: "None",
	category: "Trainer",
	trainerType: "Stadium",
	effect: {
		ja: "おたがいの場の超ポケモンが使うワザに必要なエネルギーは、それぞれ無エネルギー1個ぶん少なくなる。"
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
