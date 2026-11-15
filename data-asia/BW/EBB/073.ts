import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ゾロア"
	},
	illustrator: "Atsuko Nishida",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		570
	],
	hp: 50,
	types: [
		"Darkness"
	],
	stage: "Basic",
	description: {
		ja: "相手の 姿に 化けてみせて 驚かせる。 無口な 子供に 化けている ことが 多いらしい。"
	},
	attacks: [
		{
			name: {
				ja: "かくせい"
			},
			effect: {
				ja: "このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。"
			},
			cost: [
				"Darkness"
			]
		},
		{
			name: {
				ja: "ひっかく"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Psychic",
			value: "－20"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "normal"
		},
		{
			type: "reverse",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "reverse"
		}
	]
}

export default card
