import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "宮門競技場",
		ja: "シュートスタジアム"
	},

	illustrator: "5ban Graphics",

	category: "Trainer",

	effect: {
		'zh-tw': "雙方玩家在自己的回合，每次從手牌使出「寶可夢【VMAX】」完成「寶可夢【V】」的進化時，將那隻寶可夢恢復「100」HP。",
		ja: "おたがいのプレイヤーが、自分の番に、手札から「ポケモンVMAX」を出して「ポケモンV」を進化させるたび、そのポケモンのHPを「100」回復する。"
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
