import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洛托姆自行車",
		ja: "ロトムじてんしゃ"
	},

	illustrator: "5ban Graphics",

	category: "Trainer",

	effect: {
		'zh-tw': "若使用了這張卡，則自己的回合結束。 從牌庫抽卡直到自己的手牌滿6張為止。",
		ja: "このカードを使ったら、自分の番は終わる。 自分の手札が6枚になるように、山札を引く。"
	},

	trainerType: "Item",

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	]
}

export default card
