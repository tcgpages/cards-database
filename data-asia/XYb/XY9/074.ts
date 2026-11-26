import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "闘魂のまわし"
	},
	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Tool",
	effect: {
		ja: "このカードをつけているたねポケモンの最大HPは「40」大きくなり、そのポケモンが使うワザの、相手のバトルポケモンへのダメージは「+10」される。"
	},
	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
