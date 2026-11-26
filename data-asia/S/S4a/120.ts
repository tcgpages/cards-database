import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "狐大盜",
		ja: "フォクスライ"
	},

	illustrator: "Kouki Saitou",

	category: "Pokemon",

	hp: 100,

	types: [
		"Darkness"
	],

	description: {
		'zh-tw': "會偷偷在看中的獵物身上留下標記，追蹤目標的氣味，在對方放鬆警戒時偷盜。",
		ja: "狙った 獲物は こっそり マーキング。 においを 辿って 油断 したころ 盗みに 来るぞ。"
	},

	evolveFrom: {
		ja: "クスネ"
	},
	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "小偷",
				ja: "どろぼう"
			},
			effect: {
				'zh-tw': "查看對手的手牌，選擇其中1張卡，放回對手的牌庫下方。",
				ja: "相手の手札を見て、その中からカードを1枚選び、相手の山札の下にもどす。"
			},
			damage: 20,
			cost: [
				"Darkness"
			]
		},
		{
			name: {
				'zh-tw': "暗之牙",
				ja: "やみのキバ"
			},
			damage: 90,
			cost: [
				"Darkness",
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

	retreat: 1,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	],

	dexId: [
		828
	]
}

export default card
