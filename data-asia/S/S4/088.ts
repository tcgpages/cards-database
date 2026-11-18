import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "吼爆彈",
		ja: "ドゴーム"
	},

	illustrator: "miki kudo",

	category: "Pokemon",

	hp: 100,

	types: [
		"Colorless"
	],

	description: {
		'zh-tw': "巨大的叫聲產生的衝擊波會掀翻卡車。會利用跺腳來提高威力。",
		ja: "大声の 衝撃波で トラックを ひっくりかえしてしまう。 足を 踏みならして パワーアップ。"
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "輪唱",
				ja: "りんしょう"
			},
			effect: {
				'zh-tw': "造成自己的場上的，持有「輪唱」招式的寶可夢的數量×20點傷害。",
				ja: "自分の場の、ワザ「りんしょう」を持つポケモンの数×20ダメージ。"
			},
			damage: "20×",
			cost: [
				"Colorless",
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "巨聲",
				ja: "ハイパーボイス"
			},
			damage: 50,
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],

	retreat: 2,

	regulationMark: "D",

	rarity: "Common",

	dexId: [
		294
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
