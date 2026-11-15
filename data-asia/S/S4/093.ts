import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "彩豆",
		ja: "サイトウ"
	},

	illustrator: "take",

	category: "Trainer",

	effect: {
		'zh-tw': "將自己的牌庫上方5張卡丟棄，將其中的能量卡全部以任意方式附於備戰區的【鬥】寶可夢身上。",
		ja: "自分の山札を上から5枚トラッシュし、その中にあるエネルギーをすべて、ベンチの闘ポケモンに好きなようにつける。"
	},

	trainerType: "Supporter",

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
