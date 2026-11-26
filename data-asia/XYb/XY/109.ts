import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ターゲットホイッスル（フレア団ギア）"
	},
	illustrator: "Toyste Beach",
	rarity: "None",
	category: "Trainer",
	trainerType: "Item",
	effect: {
		ja: "相手のトラッシュからたねポケモンを1枚選び、相手のベンチに出す。"
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
