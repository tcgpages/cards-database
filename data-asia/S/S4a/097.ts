import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沙包蛇",
		ja: "スナヘビ"
	},

	illustrator: "Misa Tsutsui",

	category: "Pokemon",

	hp: 80,

	types: [
		"Fighting"
	],

	description: {
		'zh-tw': "一邊挖洞一邊把吃掉的沙子儲存在頸部的囊裡。囊裡面能裝進８公斤的沙子。",
		ja: "鼻の 穴から 砂を 噴射。 敵の 目を くらました 隙に 地中に 潜って 身を 隠す。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "潑沙",
				ja: "すなかけ"
			},
			effect: {
				'zh-tw': "在下個對手的回合，當受到這個招式的寶可夢使用招式時，對手擲1次硬幣。若為反面，則那個招式失敗。",
				ja: "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。"
			},
			cost: [
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		843
	]
}

export default card
