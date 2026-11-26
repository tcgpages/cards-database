import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "アズサ"
	},
	illustrator: "Megumi Mizutani",
	rarity: "None",
	category: "Trainer",
	trainerType: "Supporter",
	effect: {
		ja: "自分の山札から、たねポケモンの「ポケモンEX」を1枚、またはたねポケモン（「ポケモンEX」をのぞく）を3枚まで選び、ベンチに出す。そして山札を切る。"
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
