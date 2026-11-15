import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "灰塵山",
		ja: "ダストダス"
	},

	illustrator: "Hasuno",

	category: "Pokemon",

	hp: 120,

	types: [
		"Darkness"
	],

	description: {
		'zh-tw': "吃掉的垃圾會在體內轉化為毒素。毒素的成分會隨著吃掉的垃圾而不同。",
		ja: "食った ゴミが 体内で 毒に 変化する。 食う ゴミ しだいで 毒の 主成分も 変わる。"
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "灰塵旋風",
				ja: "ダストサイクロン"
			},
			effect: {
				'zh-tw': "在給對手看過自己的棄牌區的所有「寶可夢道具」後，造成其張數×30點傷害。然後，將給對手看過的「寶可夢道具」放回牌庫並重洗。",
				ja: "自分のトラッシュにある「ポケモンのどうぐ」をすべて相手に見せて、その枚数×30ダメージ。その後、見せた「ポケモンのどうぐ」を山札にもどして切る。"
			},
			damage: "30×",
			cost: [
				"Colorless",
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "噴毒",
				ja: "どくをとばす"
			},
			effect: {
				'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
				ja: "相手のバトルポケモンをどくにする。"
			},
			damage: 80,
			cost: [
				"Darkness",
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

	retreat: 3,

	regulationMark: "D",

	rarity: "Uncommon",

	dexId: [
		569
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
