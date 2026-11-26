import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "アーマーガア"
	},
	illustrator: "kirisAki",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 170,
	types: [
		"Metal"
	],
	evolveFrom: {
		ja: "アオガラス"
	},
	stage: "Stage2",
	dexId: [
		823
	],
	description: {
		ja: "ガラル地方の 空では 敵なし。 黒光りする 鋼の 姿は 相手を 威圧し 恐れさせる。"
	},
	attacks: [
		{
			name: {
				ja: "つつく"
			},
			cost: [
				"Colorless"
			],
			damage: 50
		},
		{
			name: {
				ja: "くろがねのつばさ"
			},
			effect: {
				ja: "のぞむなら、このポケモンについているエネルギーを2個選び、トラッシュする。その場合、次の相手の番、このポケモンが受けるワザのダメージは「-100」される。"
			},
			cost: [
				"Metal",
				"Colorless",
				"Colorless"
			],
			damage: 130
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
