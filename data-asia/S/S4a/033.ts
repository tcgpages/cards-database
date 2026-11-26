import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "水君",
		ja: "スイクン"
	},

	illustrator: "so-taro",

	category: "Pokemon",

	hp: 120,

	types: [
		"Water"
	],

	description: {
		'zh-tw': "體內蘊藏著泉水般溫柔的寶可夢。會用滑行般的動作在大地上奔跑，有著淨化濁水的力量。",
		ja: "一瞬で 汚く 濁った 水も 清める 力を 持つ。 北風の 生まれ変わり という。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "飛濺",
				ja: "スプラッシュ"
			},
			damage: 20,
			cost: [
				"Water"
			]
		},
		{
			name: {
				'zh-tw': "極光閉環",
				ja: "オーロラループ"
			},
			effect: {
				'zh-tw': "選擇2個這隻寶可夢身上附加的【水】能量，放回手牌。",
				ja: "このポケモンについている水エネルギーを2個選び、手札にもどす。"
			},
			damage: 130,
			cost: [
				"Water",
				"Water",
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

	retreat: 1,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "holo", languages: ["ja"] }
	],

	dexId: [
		245
	]
}

export default card
