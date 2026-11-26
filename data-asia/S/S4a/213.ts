import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "タルップル"
	},
	illustrator: "Kouki Saitou",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: [
		"Grass"
	],
	evolveFrom: {
		ja: "カジッチュ"
	},
	stage: "Stage1",
	dexId: [
		842
	],
	description: {
		ja: "甘い りんごを 食べて 進化。 体から 甘い においを だして 餌の 虫ポケモンを 引き寄せる。"
	},
	abilities: [
		{
			name: {
				ja: "おいしいかおり"
			},
			effect: {
				ja: "自分の番に1回使える。コインを1回投げオモテなら、相手のベンチのたねポケモンを1匹選び、バトルポケモンと入れ替える。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "ソーラービーム"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: 70
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 3,
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
