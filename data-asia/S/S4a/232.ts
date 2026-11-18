import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ユキハミ"
	},
	illustrator: "Yumi",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 50,
	types: [
		"Water"
	],
	stage: "Basic",
	dexId: [
		872
	],
	description: {
		ja: "冷気の 混ざった 糸を 吐く。 糸で 体を 枝に 巻きつけ 氷柱の 振りをして 眠るのだ。"
	},
	attacks: [
		{
			name: {
				ja: "なかまをよぶ"
			},
			effect: {
				ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。"
			},
			cost: [
				"Water"
			]
		}
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
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
