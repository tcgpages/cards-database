import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ライボルトソウルリンク"
	},
	illustrator: "Toyste Beach",
	rarity: "None",
	category: "Trainer",
	trainerType: "Tool",
	effect: {
		ja: "このカードをつけているポケモンが「メガライボルトEX」になっても、自分の番は終わらない。"
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
