import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鬼斯通",
		ja: "ゴースト"
	},

	illustrator: "HYOGONOSUKE",

	category: "Pokemon",

	hp: 70,

	types: [
		"Psychic"
	],

	description: {
		'zh-tw': "據說如果被牠氣體狀的舌頭舔到，身體就會無法停止顫抖，最終將會導致死亡。",
		ja: "ガス状の 舌で なめられると 体の 震えが 止まらなくなり やがては 死 に いたるという。"
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "惡夢",
				ja: "あくむ"
			},
			effect: {
				'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
				ja: "相手のバトルポケモンをねむりにする。"
			},
			damage: 20,
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "陰森射擊",
				ja: "ホロウショット"
			},
			damage: 40,
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

	dexId: [
		93
	]
}

export default card
