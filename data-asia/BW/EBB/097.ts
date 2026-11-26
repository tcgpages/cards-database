import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ポケモンエンタープライズ"
	},
	rarity: "None",
	category: "Trainer",
	trainerType: "Supporter",
	effect: {
		ja: "コインを1回投げオモテなら、自分のポケモンを1匹選び、HPを「30」回復する。ウラなら、自分の山札を3枚引く。"
	},
	variants: [
		{
			type: "normal",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "reverse",
			stamp: [
				"1st-edition"
			]
		}
	]
}

export default card
