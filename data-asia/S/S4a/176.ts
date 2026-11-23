import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "老大的指令（坂木）",
		ja: "ボスの指令"
	},

	illustrator: "nagimiso",

	category: "Trainer",

	effect: {
		'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。",
		ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。"
	},

	trainerType: "Supporter",

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "holo", languages: ["ja"] }
	]
}

export default card
