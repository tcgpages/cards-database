import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "サイキッカーの心眼"
	},
	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Supporter",
	effect: {
		ja: "相手の手札を見る。自分の手札を好きなだけトラッシュし、トラッシュした枚数ぶん、自分の山札を引く。"
	},
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
