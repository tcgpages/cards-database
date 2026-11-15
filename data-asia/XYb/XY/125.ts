import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ちからのハチマキ"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Trainer",
	trainerType: "Tool",
	effect: {
		ja: "このカードをつけているポケモンが使うワザの、相手のバトルポケモンへのダメージは「+20」される。"
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
