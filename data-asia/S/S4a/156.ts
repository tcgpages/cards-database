import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "呐喊隊加油毛巾",
		ja: "エール団のおうえんタオル"
	},

	illustrator: "Studio Bora Inc.",

	category: "Trainer",

	effect: {
		'zh-tw': "將雙方的戰鬥寶可夢各恢復「50」HP。",
		ja: "おたがいのバトルポケモンのHPを、それぞれ「50」回復する。"
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
