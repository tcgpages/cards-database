import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "腐朽的盾",
		ja: "くちたたて"
	},

	illustrator: "5ban Graphics",

	category: "Trainer",

	effect: {
		'zh-tw': "寶可夢道具卡，附於自己的寶可夢使用。1隻寶可夢只可附上1張寶可夢道具卡，並且保持附加狀態。",
		ja: "このカードをつけている「ザマゼンタV」の最大HPは「70」大きくなる。"
	},

	trainerType: "Tool",

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	]
}

export default card
