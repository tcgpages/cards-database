import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "丹帝",
		ja: "ダンデ"
	},

	illustrator: "Ken Sugimori",

	category: "Trainer",

	effect: {
		'zh-tw': "在這個回合，自己的寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+30」點。",
		ja: "この番、自分のポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。"
	},

	trainerType: "Supporter",

	regulationMark: "D",

	rarity: "Rare",

	variants: [
		{
			type: "holo",
			languages: [
				"ja"
			]
		}
	]
}

export default card
