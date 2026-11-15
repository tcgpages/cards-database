import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "黑夜魔靈",
		ja: "ヨノワール"
	},

	illustrator: "Shigenori Negishi",

	category: "Pokemon",

	hp: 150,

	types: [
		"Psychic"
	],

	description: {
		'zh-tw': "沒人知道牠是否擁有意識。會從來自靈界的電波中接受指示，將人和寶可夢帶走。",
		ja: "意思が あるのか わかっていない。 霊界からの 電波に 従い 人や ポケモンを 連れ去るのだ。"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "幽靈漂白",
				ja: "ゴーストブリーチ"
			},
			effect: {
				'zh-tw': "只要這隻寶可夢在場上，雙方的場上寶可夢身上附加的特殊能量的效果全部消除，視為提供1個【無】能量。",
				ja: "このポケモンがいるかぎり、おたがいの場のポケモンについている特殊エネルギーの効果はすべてなくなり、無エネルギー1個ぶんとしてはたらく。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "陰森射擊",
				ja: "ホロウショット"
			},
			damage: 120,
			cost: [
				"Psychic",
				"Colorless",
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

	retreat: 2,

	regulationMark: "D",

	rarity: "Rare",

	dexId: [
		477
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
