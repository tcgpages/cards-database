import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "こわいおねえさん"
	},
	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Supporter",
	effect: {
		ja: "場に出ているスタジアムをトラッシュする。その後、相手は相手自身の手札を3枚選び、トラッシュする。"
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
