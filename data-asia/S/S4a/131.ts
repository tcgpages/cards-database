import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "堅盾劍怪",
		ja: "ギルガルド"
	},

	illustrator: "Ryuta Fuse",

	category: "Pokemon",

	hp: 140,

	types: [
		"Metal"
	],

	description: {
		'zh-tw': "處於防禦狀態時，會用鋼之身體和靈力的屏障來減弱一切的攻擊。",
		ja: "鋼の 体と 霊力の バリアで あらゆる 攻撃を 弱める 防御の 体勢。"
	},

	evolveFrom: {
		ja: "ニダンギル"
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "大盾牌",
				ja: "ビッグシールド"
			},
			effect: {
				'zh-tw': "只要這隻寶可夢在場上，自己的所有寶可夢受到對手的寶可夢招式的傷害「-30」點。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。",
				ja: "このポケモンがいるかぎり、自分のポケモン全員が、相手のポケモンから受けるワザのダメージは「-30」される。この効果は、この特性を持つポケモンが何匹いても、重ならない。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "力量刀鋒",
				ja: "パワーエッジ"
			},
			damage: 130,
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

	retreat: 3,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	],

	dexId: [
		681
	]
}

export default card
