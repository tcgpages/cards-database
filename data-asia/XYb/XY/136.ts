import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "レックウザソウルリンク"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Trainer",
	trainerType: "Tool",
	effect: {
		ja: "このカードをつけているポケモンが「レックウザEX」になっても、自分の番は終わらない。"
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
