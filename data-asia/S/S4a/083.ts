import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "愛管侍",
		ja: "イエッサン"
	},

	illustrator: "Mizue",

	category: "Pokemon",

	hp: 100,

	types: [
		"Psychic"
	],

	description: {
		'zh-tw': "擁有高度智能的寶可夢，能透過夥伴間角與角的互碰來彼此交換訊息。",
		ja: "高い 知能を もつ ポケモン。 仲間同士で ツノを 寄せあい 情報 交換を する。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "清新時間",
				ja: "リフレッシュタイム"
			},
			effect: {
				'zh-tw': "將自己的所有寶可夢各恢復「30」HP。",
				ja: "自分のポケモン全員のHPを、それぞれ「30」回復する。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "幻象光線",
				ja: "サイケこうせん"
			},
			effect: {
				'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
				ja: "相手のバトルポケモンをこんらんにする。"
			},
			damage: 30,
			cost: [
				"Psychic",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		}
	],

	retreat: 1,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	],

	dexId: [
		876
	]
}

export default card
