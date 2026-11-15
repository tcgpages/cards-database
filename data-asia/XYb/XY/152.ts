import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ポケモンレンジャー"
	},
	illustrator: "Yusuke Ohmura",
	rarity: "None",
	category: "Trainer",
	trainerType: "Supporter",
	effect: {
		ja: "おたがいのプレイヤーと、おたがいのポケモンにかかっているワザの効果は、すべてなくなる。"
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
