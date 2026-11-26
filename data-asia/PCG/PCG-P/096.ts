import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ポケモン大好きクラブ",
	},
	rarity: "Promo",
	category: "Trainer",
	illustrator: "Ken Sugimori",
	trainerType: "Supporter",
	effect: {
		ja: "自分の山札から、「たねポケモン」を2枚まで選び出し、自分のベンチに出す。その後、その山札を切る。",
	},
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
