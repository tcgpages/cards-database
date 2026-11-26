import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "回收網",
		ja: "回収ネット"
	},

	illustrator: "Ryo Ueda",

	category: "Trainer",

	effect: {
		'zh-tw': "選擇自己的1隻寶可夢（「寶可夢【V】・【GX】」除外），放回手牌。（寶可夢以外的卡全部丟棄。）",
		ja: "自分のポケモン（「ポケモンV・GX」をのぞく）を1匹選び、手札にもどす。（ポケモン以外のカードは、すべてトラッシュする。）"
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
