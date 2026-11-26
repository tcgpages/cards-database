import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "拳拳蛸",
		ja: "タタッコ"
	},

	illustrator: "Mina Nakai",

	category: "Pokemon",

	hp: 60,

	types: [
		"Fighting"
	],

	description: {
		'zh-tw': "會為了尋找食物而登上陸地。擁有旺盛的好奇心，不管看到什麼，都會先用觸手打一打再說。",
		ja: "餌を 求め 地上に 上がる。 好奇心旺盛で 目にしたものは とりあえず 触手で 殴る。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "綁緊",
				ja: "しめつける"
			},
			effect: {
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			damage: 20,
			cost: [
				"Fighting"
			]
		}
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	],

	dexId: [
		852
	]
}

export default card
