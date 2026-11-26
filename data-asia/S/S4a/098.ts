import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沙螺蟒",
		ja: "サダイジャ"
	},

	illustrator: "Kouki Saitou",

	category: "Pokemon",

	hp: 140,

	types: [
		"Fighting"
	],

	description: {
		'zh-tw': "蜷縮身體後從鼻孔裡噴射出１００公斤的沙子。沒有了沙子就會變得很懦弱。",
		ja: "独特の とぐろの 巻き方は 砂袋の 砂を より 効率 よく 噴射 するため なのだ。"
	},

	evolveFrom: {
		ja: "スナヘビ"
	},
	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "盤蜷",
				ja: "とぐろをまく"
			},
			effect: {
				'zh-tw': "在下個自己的回合，這隻寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+120」點。",
				ja: "次の自分の番、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+120」される。"
			},
			damage: 10,
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "火箭頭錘",
				ja: "ロケットずつき"
			},
			damage: 100,
			cost: [
				"Fighting",
				"Colorless",
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

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	],

	dexId: [
		844
	]
}

export default card
