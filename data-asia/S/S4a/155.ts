import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "古月鳥V",
		ja: "ウッウV"
	},

	illustrator: "aky CG Works",

	category: "Pokemon",

	hp: 200,

	types: [
		"Colorless"
	],

	dexId: [
		845
	],
	stage: "Basic",

	suffix: "V",

	attacks: [
		{
			name: {
				'zh-tw': "鳥嘴捕捉",
				ja: "くちばしキャッチ"
			},
			effect: {
				'zh-tw': "從自己的牌庫任意選擇最多2張卡加入手牌。並且重洗牌庫。",
				ja: "自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "噴吐射擊",
				ja: "スピットシュート"
			},
			effect: {
				'zh-tw': "將這隻寶可夢身上附加的能量全部丟棄，對手的1隻寶可夢受到160點傷害。[在備戰區不計算弱點・抵抗力。]",
				ja: "このポケモンについているエネルギーをすべてトラッシュし、相手のポケモン1匹に、160ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Lightning",
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

	rarity: "Holo Rare V",

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
