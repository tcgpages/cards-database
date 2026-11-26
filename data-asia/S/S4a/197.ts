import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ポケモンごっこ"
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Ultra Rare",
	category: "Trainer",
	trainerType: "Supporter",
	effect: {
		ja: "自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
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
