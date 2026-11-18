import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "熔岩蝸牛",
		ja: "マグカルゴ"
	},

	illustrator: "Masakazu Fukuda",

	category: "Pokemon",

	hp: 130,

	types: [
		"Fire"
	],

	description: {
		'zh-tw': "身體總是不斷起伏著，像熔岩一樣灼熱。會不時從殼裡冒出火花。",
		ja: "体は いつも 波打っていて 溶岩のように 熱い。 ときどき 殻から 火の粉が漏れる。"
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "高溫爆破",
				ja: "ヒートブラスト"
			},
			damage: 60,
			cost: [
				"Fire",
				"Colorless",
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "紅蓮火焰",
				ja: "ぐれんのほのお"
			},
			effect: {
				'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
				ja: "このポケモンについているエネルギーを2個選び、トラッシュする。"
			},
			damage: 180,
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],

	retreat: 3,

	regulationMark: "D",

	rarity: "Common",

	dexId: [
		219
	],

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
