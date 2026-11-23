import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "アイアント"
	},
	rarity: "Common",
	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 100,
	types: [
		"Metal"
	],
	stage: "Basic",
	dexId: [
		632
	],
	description: {
		ja: "巣の 奥深くに タマゴを 産む。 クイタランに 襲われると 大きな 顎で 噛みついて 反撃。"
	},
	attacks: [
		{
			name: {
				ja: "えさあつめ"
			},
			effect: {
				ja: "このポケモンについているエネルギーの数ぶんまで、自分の山札からトレーナーズを選び、相手に見せて、手札に加える。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "メタルクロー"
			},
			cost: [
				"Metal",
				"Colorless",
				"Colorless"
			],
			damage: 80
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
			value: "－30"
		}
	],
	retreat: 1,
	regulationMark: "D",
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
