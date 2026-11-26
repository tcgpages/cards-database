import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "コラッタ"
	},
	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: [
		"Colorless"
	],
	stage: "Basic",
	dexId: [
		19
	],
	description: {
		ja: "キバは 長くて 鋭い。 一生 伸び続けるので 硬い ものを かじって 削る。"
	},
	attacks: [
		{
			name: {
				ja: "きけんさっち"
			},
			effect: {
				ja: "自分の山札を1枚引く。このポケモンをベンチポケモンと入れ替える。"
			},
			cost: [
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
