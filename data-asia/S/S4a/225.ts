import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ジメレオン"
	},
	illustrator: "Ryuta Fuse",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: [
		"Water"
	],
	stage: "Stage1",
	dexId: [
		817
	],
	description: {
		ja: "手のひらから 出る 水分を 丸めて つくった 水の 玉を 使い 頭脳戦を 繰り広げる。"
	},
	abilities: [
		{
			name: {
				ja: "うらこうさく"
			},
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札からトレーナーズを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "みずきり"
			},
			cost: [
				"Water",
				"Colorless"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 1,
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
