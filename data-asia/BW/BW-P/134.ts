import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "デンリュウ"
	},
	rarity: "Promo",
	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 140,
	types: [
		"Lightning"
	],
	stage: "Stage2",
	dexId: [
		181
	],
	description: {
		ja: "しっぽの 先が 光り輝く。 昔の 人たちは その 明かりを 使って 合図を 送りあった。"
	},
	attacks: [
		{
			name: {
				ja: "でんじスパーク"
			},
			effect: {
				ja: "相手のポケモンを1匹選び、30ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Lightning"
			]
		},
		{
			name: {
				ja: "エレキほう"
			},
			effect: {
				ja: "のぞむなら、このポケモンについている[雷]エネルギーをすべてトラッシュしてよい。その場合、60ダメージを追加。"
			},
			cost: [
				"Lightning",
				"Lightning",
				"Colorless"
			],
			damage: "60+"
		}
	],
	evolveFrom: {
		ja: "デンリュウGX"
	},
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 2
}

export default card
