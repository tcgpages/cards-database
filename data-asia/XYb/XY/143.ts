import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "クセロシキ"
	},
	illustrator: "Yusuke Ohmura",
	rarity: "None",
	category: "Trainer",
	trainerType: "Supporter",
	effect: {
		ja: "おたがいの場のポケモンについている「ポケモンのどうぐ」「特殊エネルギー」のうち1枚を選び、トラッシュする。"
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
