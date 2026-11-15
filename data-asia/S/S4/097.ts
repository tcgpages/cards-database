import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "戰競溫泉",
		ja: "キルクス温泉"
	},

	illustrator: "5ban Graphics",

	category: "Trainer",

	effect: {
		'zh-tw': "雙方的【基礎】寶可夢，受到對手的寶可夢招式的傷害「-20」點。",
		ja: "おたがいのたねポケモンが、相手のポケモンから受けるワザのダメージは「-20」される。"
	},

	trainerType: "Stadium",

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
