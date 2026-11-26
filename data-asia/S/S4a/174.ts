import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "博士的研究(木蘭博士)",
		ja: "博士の研究"
	},

	illustrator: "Yusuke Ohmura",

	category: "Trainer",

	effect: {
		'zh-tw': "將自己的手牌全部丟棄，從牌庫抽出7張卡。",
		ja: "自分の手札をすべてトラッシュし、山札を7枚引く。"
	},

	trainerType: "Supporter",

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "holo", languages: ["ja"] }
	]
}

export default card
