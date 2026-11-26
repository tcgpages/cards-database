import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "灼熱の大地"
	},
	illustrator: "Ryo Ueda",
	rarity: "None",
	category: "Trainer",
	trainerType: "Stadium",
	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分の手札から炎エネルギーまたは闘エネルギーを1枚選び、トラッシュしてよい。トラッシュした場合、自分の山札を2枚引く。"
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
