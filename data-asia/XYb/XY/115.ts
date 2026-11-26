import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "バトルサーチャー"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Trainer",
	trainerType: "Item",
	effect: {
		ja: "自分のトラッシュからサポートを1枚選び、相手に見せてから、手札に加える。"
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
