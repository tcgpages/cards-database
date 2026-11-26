import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洛茲大廈",
		ja: "ローズタワー"
	},

	illustrator: "5ban Graphics",

	category: "Trainer",

	effect: {
		'zh-tw': "雙方玩家在每個自己的回合時，可使用1次，可從牌庫抽卡直到自己的手牌滿3張為止。",
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分の手札が3枚になるように、山札を引いてよい。"
	},

	trainerType: "Stadium",

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	]
}

export default card
