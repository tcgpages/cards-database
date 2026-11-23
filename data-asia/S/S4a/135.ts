import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鋁鋼龍",
		ja: "ジュラルドン"
	},

	illustrator: "Kazuma Koda",

	category: "Pokemon",

	hp: 130,

	types: [
		"Metal"
	],

	description: {
		'zh-tw': "身體猶如打磨過的金屬，雖然輕而堅硬，卻有著容易生鏽的弱點。",
		ja: "磨きあげた 金属の ような 体は 軽いうえに 硬いが 錆びやすいのが 欠点なのだ。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "金屬削卷",
				ja: "メタルシャープナー"
			},
			effect: {
				'zh-tw': "從自己的棄牌區選擇1張【鋼】能量卡，附於自己的寶可夢身上。",
				ja: "自分のトラッシュから鋼エネルギーを1枚選び、自分のポケモンにつける。"
			},
			damage: 30,
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "强力光束",
				ja: "パワービーム"
			},
			damage: 110,
			cost: [
				"Metal",
				"Metal",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		}
	],

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "holo", languages: ["ja"] }
	],

	dexId: [
		884
	]
}

export default card
