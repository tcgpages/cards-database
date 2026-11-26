import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "回憶膠囊",
		ja: "メモリーカプセル"
	},

	illustrator: "sadaji",

	category: "Trainer",

	effect: {
		'zh-tw': "寶可夢道具卡，附於自己的寶可夢使用。1隻寶可夢只可附上1張寶可夢道具卡，並且保持附加狀態。",
		ja: "このカードをつけているポケモンは、進化前に持っていたワザを、すべて使える。［ワザを使うためのエネルギーは必要。］"
	},

	trainerType: "Tool",

	regulationMark: "D",

	rarity: "Uncommon",

	variants: [
		{
			type: "normal",
			languages: [
				"ja"
			]
		}
	]
}

export default card
