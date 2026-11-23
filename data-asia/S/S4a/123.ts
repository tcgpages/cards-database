import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "長毛巨魔",
		ja: "オーロンゲ"
	},

	illustrator: "nagimiso",

	category: "Pokemon",

	hp: 170,

	types: [
		"Darkness"
	],

	description: {
		'zh-tw': "透過用頭髮裹住全身，讓肌肉的力量向上提升。能發揮出足以壓倒怪力的力量。",
		ja: "髪の毛を 全身に 巻きつけると 筋力が アップ。 カイリキーを ねじ伏せる パワーを 発揮する。"
	},

	evolveFrom: {
		ja: "ギモー"
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "惡之制約",
				ja: "あくのせいやく"
			},
			effect: {
				'zh-tw': "只要這隻寶可夢在戰鬥場上，對手的戰鬥寶可夢使用招式所需的能量增加1個【無】能量。",
				ja: "このポケモンがバトル場にいるかぎり、相手のバトルポケモンは、ワザを使うためのエネルギーが、無エネルギー1個ぶん多くなる。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "能量壓制",
				ja: "エナジープレス"
			},
			effect: {
				'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×30點傷害。",
				ja: "相手のバトルポケモンについているエネルギーの数×30ダメージ追加。"
			},
			damage: "100+",
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

	retreat: 3,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "holo", languages: ["ja"] }
	],

	dexId: [
		861
	]
}

export default card
