import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ダートじてんしゃ"
	},
	illustrator: "Toyste Beach",
	rarity: "None",
	category: "Trainer",
	trainerType: "Item",
	effect: {
		ja: "自分の山札を上から2枚見て、どちらか1枚を選び、手札に加える。残りのカードはトラッシュする。"
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
