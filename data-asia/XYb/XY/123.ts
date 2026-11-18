import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "きあいのタスキ"
	},
	illustrator: "Toyste Beach",
	rarity: "None",
	category: "Trainer",
	trainerType: "Tool",
	effect: {
		ja: "このカードをつけている闘ポケモンのHPがまんたんの状態で、相手のワザのダメージを受けてきぜつする場合、そのポケモンはきぜつせず、残りHPが「10」の状態で場に残る。その後、このカードをトラッシュする。"
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
