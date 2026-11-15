import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鋼鎧鴉",
		ja: "アーマーガア"
	},

	illustrator: "Shin Nagasawa",

	category: "Pokemon",

	hp: 170,

	types: [
		"Metal"
	],

	description: {
		'zh-tw': "在伽勒爾地區的空中所向無敵。牠那黑得發亮的鋼鐵之軀有著讓敵人畏懼的威懾力。",
		ja: "ガラル地方の 空では 敵なし。 黒光りする 鋼の 姿は 相手を 威圧し 恐れさせる。"
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				'zh-tw': "啄",
				ja: "つつく"
			},
			damage: 50,
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "黑金之翼",
				ja: "くろがねのつばさ"
			},
			effect: {
				'zh-tw': "若希望，選擇2個這隻寶可夢身上附加的能量，將其丟棄。這個情況下，在下個對手的回合，這隻寶可夢受到招式的傷害「-100」點。",
				ja: "のぞむなら、このポケモンについているエネルギーを2個選び、トラッシュする。その場合、次の相手の番、このポケモンが受けるワザのダメージは「-100」される。"
			},
			damage: 130,
			cost: [
				"Metal",
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

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		823
	]
}

export default card
