import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火伊布",
		ja: "ブースター"
	},

	illustrator: "Eri Yamaki",

	category: "Pokemon",

	hp: 110,

	types: [
		"Fire"
	],

	description: {
		'zh-tw': "當火焰在體內積蓄時，火伊布的體溫也會隨之上升到最高９００度。",
		ja: "体内に 炎が 溜まると ブースターの 体温も 最高 ９００度 まで 上がっていく。"
	},

	evolveFrom: {
		ja: "イーブイ"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "灼熱覺醒",
				ja: "しゃくねつのめざめ"
			},
			effect: {
				'zh-tw': "若這隻寶可夢身上附有「回憶膠囊」，則雙方的場上【草】寶可夢的特性全部消除。",
				ja: "このポケモンに「メモリーカプセル」がついているなら、おたがいの場の草ポケモンの特性は、すべてなくなる。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "火之鬃",
				ja: "ほのおのたてがみ"
			},
			damage: 100,
			cost: [
				"Fire",
				"Fire",
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

	retreat: 2,

	regulationMark: "D",

	rarity: "Uncommon",

	dexId: [
		136
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
