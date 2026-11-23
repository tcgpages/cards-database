import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "養鳥人",
		ja: "とりつかい"
	},

	illustrator: "Hideki Ishikawa",

	category: "Trainer",

	effect: {
		'zh-tw': "將自己的戰鬥寶可夢與備戰寶可夢互換。然後，從自己的牌庫抽出3張卡。",
		ja: "自分のバトルポケモンをベンチポケモンと入れ替える。その後、自分の山札を3枚引く。"
	},

	trainerType: "Supporter",

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	]
}

export default card
