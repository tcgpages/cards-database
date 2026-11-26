import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "迷光森林",
		ja: "ルミナスメイズの森"
	},

	illustrator: "aky CG Works",

	category: "Trainer",

	effect: {
		'zh-tw': "雙方玩家在每個自己的回合時，可使用1次。因自己的寶可夢的招式而擲硬幣時，可將擲硬幣的結果全部消除，重新擲硬幣。",
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分のポケモンのワザでコインを投げたとき、そのコインの結果をすべてなくし、はじめからコインを投げなおしてよい。"
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
