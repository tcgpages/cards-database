import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "サイレントラボ"
	},
	illustrator: "Ryo Ueda",
	rarity: "None",
	category: "Trainer",
	trainerType: "Stadium",
	effect: {
		ja: "おたがいの場・手札・トラッシュにあるたねポケモンの特性は、すべてなくなる。"
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
