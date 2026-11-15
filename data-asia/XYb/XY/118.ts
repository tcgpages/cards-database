import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ヘビーボール"
	},
	illustrator: "Toyste Beach",
	rarity: "None",
	category: "Trainer",
	trainerType: "Item",
	effect: {
		ja: "自分の山札から、にげるために必要なエネルギーの数が「3」以上のポケモンを1枚選び、相手に見せてから、手札に加える。そして山札を切る。"
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
