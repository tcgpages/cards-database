import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ジムトレーナー"
	},
	illustrator: "nagimiso",
	rarity: "Ultra Rare",
	category: "Trainer",
	trainerType: "Supporter",
	effect: {
		ja: "自分の山札を2枚引く。前の相手の番に、自分のポケモンがきぜつしていたなら、さらに2枚引く。"
	},
	regulationMark: "D",
	variants: [
		{
			type: "holo",
			languages: [
				"ja"
			]
		}
	]
}

export default card
