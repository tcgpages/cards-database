import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大炭車",
		ja: "トロッゴン"
	},

	illustrator: "Mitsuhiro Arita",

	category: "Pokemon",

	hp: 100,

	types: [
		"Fighting"
	],

	description: {
		'zh-tw': "能在體內製造煤炭。在過去，伽勒爾人曾經用牠身上掉下來的煤炭生活。",
		ja: "体内で 石炭を つくりだす。 昔の ガラルでは 落とした 石炭を 生活に 利用した。"
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "衝撞",
				ja: "ぶつかる"
			},
			damage: 30,
			cost: [
				"Colorless",
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "高溫重壓",
				ja: "ヒートスタンプ"
			},
			damage: 60,
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

	retreat: 3,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		838
	]
}

export default card
