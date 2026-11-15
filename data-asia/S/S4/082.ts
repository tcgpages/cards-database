import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鋁鋼龍",
		ja: "ジュラルドン"
	},

	illustrator: "kawayoo",

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
				'zh-tw': "憤怒之爪",
				ja: "いかりのツメ"
			},
			effect: {
				'zh-tw': "增加這隻寶可夢身上放置的傷害指示物的數量×10點傷害。",
				ja: "このポケモンにのっているダメカンの数×10ダメージ追加。"
			},
			damage: "20+",
			cost: [
				"Colorless",
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "力量爆破",
				ja: "パワーブラスト"
			},
			effect: {
				'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			damage: 120,
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

	rarity: "Rare",

	dexId: [
		884
	],

	variants: [
		{
			type: "holo",
			languages: [
				"ja"
			]
		}
	]
}

export default card
