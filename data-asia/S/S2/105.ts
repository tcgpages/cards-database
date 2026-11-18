import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "オリーヴ"
	},
	rarity: "Ultra Rare",
	illustrator: "kirisAki",
	category: "Trainer",
	trainerType: "Supporter",
	effect: {
		ja: "このカードは、自分の手札を2枚トラッシュしなければ使えない。 相手の手札を見て、その中からトレーナーズを1枚選び、相手の山札の下にもどす。"
	},
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
