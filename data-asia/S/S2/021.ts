import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ペリッパー"
	},
	rarity: "Uncommon",
	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 120,
	types: [
		"Water"
	],
	stage: "Stage1",
	dexId: [
		279
	],
	description: {
		ja: "口の中に 小さなポケモンや タマゴを入れて 安全な 場所に 届けてくれる 空の 運び屋。"
	},
	attacks: [
		{
			name: {
				ja: "つばさでうつ"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 50
		},
		{
			name: {
				ja: "パワーサイクロン"
			},
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。"
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless"
			],
			damage: 110
		}
	],
	evolveFrom: {
		ja: "キャモメ"
	},
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "－30"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
