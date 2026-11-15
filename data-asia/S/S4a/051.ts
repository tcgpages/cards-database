import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鰓魚海獸",
		ja: "ウオチルドン"
	},

	illustrator: "Shin Nagasawa",

	category: "Pokemon",

	hp: 150,

	types: [
		"Water"
	],

	description: {
		'zh-tw': "雖然能透過凍結四周來捕捉獵物，但由於嘴長在頭頂上，所以吃起東西來不太方便。",
		ja: "周囲を 凍りつかせて 獲物を 捕まえるが 口が 頭の 上に あるので 食べづらい。"
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "堅硬面孔",
				ja: "かたいかお"
			},
			effect: {
				'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-60」點。",
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-60」される。"
			},
			damage: 90,
			cost: [
				"Water",
				"Colorless",
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "極寒吐息",
				ja: "コールドブレス"
			},
			effect: {
				'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
				ja: "相手のバトルポケモンをねむりにする。"
			},
			damage: 130,
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		883
	]
}

export default card
