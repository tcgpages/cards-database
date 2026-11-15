import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ピーピーマックス"
	},
	illustrator: "Toyste Beach",
	rarity: "None",
	category: "Trainer",
	trainerType: "Item",
	effect: {
		ja: "自分の山札を上から6枚見て、その中の基本エネルギーを1枚選び、自分のベンチのたねポケモンにつける。残りのカードは山札にもどし、山札を切る。"
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
