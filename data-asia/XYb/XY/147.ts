import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "センパイとコウハイ"
	},
	illustrator: "Megumi Mizutani",
	rarity: "None",
	category: "Trainer",
	trainerType: "Supporter",
	effect: {
		ja: "このカードは、前の相手の番に、自分のポケモンがきぜつしていなければ使えない。 自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。"
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
