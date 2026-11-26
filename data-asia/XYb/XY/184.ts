import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "こわいおねえさん"
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "None",
	category: "Trainer",
	trainerType: "Supporter",
	effect: {
		ja: "場に出ているスタジアムをトラッシュする。その後、相手は相手自身の手札を3枚選び、トラッシュする。"
	},
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
