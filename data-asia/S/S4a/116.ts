import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "灰塵山",
		ja: "ダストダス"
	},

	illustrator: "tetsuya koizumi",

	category: "Pokemon",

	hp: 120,

	types: [
		"Darkness"
	],

	description: {
		'zh-tw': "吃掉的垃圾會在體內轉化為毒素。毒素的成分會隨著吃掉的垃圾而不同。",
		ja: "食った ゴミが 体内で 毒に 変化する。 食う ゴミ しだいで 毒の 主成分も 変わる。"
	},

	evolveFrom: {
		ja: "ヤブクロン"
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "浸毒之地",
				ja: "どくだまり"
			},
			effect: {
				'zh-tw': "若場上有競技場卡，則在自己的回合時，可使用1次。將對手的戰鬥寶可夢【中毒】。",
				ja: "場にスタジアムが出ているなら、自分の番に1回使える。相手のバトルポケモンをどくにする。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "污泥炸彈",
				ja: "ヘドロばくだん"
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

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	],

	dexId: [
		569
	]
}

export default card
