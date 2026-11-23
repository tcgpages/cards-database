import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウV"
	},
	illustrator: "Saki Hayashiro",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: [
		"Lightning"
	],
	dexId: [
		25
	],
	stage: "Basic",
	suffix: "V",
	attacks: [
		{
			name: {
				ja: "じゅうでん"
			},
			effect: {
				ja: "自分の山札から雷エネルギーを2枚まで選び、このポケモンにつける。そして山札を切る。"
			},
			cost: [
				"Lightning"
			]
		},
		{
			name: {
				ja: "10まんボルト"
			},
			effect: {
				ja: "このポケモンについているエネルギーを、すべてトラッシュする。"
			},
			cost: [
				"Lightning",
				"Lightning",
				"Colorless"
			],
			damage: 200
		}
	],
	weaknesses: [
		{
			type: "Fighting",
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
