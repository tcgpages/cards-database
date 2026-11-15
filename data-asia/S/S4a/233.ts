import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "モスノウ"
	},
	illustrator: "Akira Komayama",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: [
		"Water"
	],
	stage: "Stage1",
	dexId: [
		873
	],
	description: {
		ja: "野山を 荒らすものには 容赦 しない。 冷たいはねで 飛びまわり 吹雪を 起こして 懲らしめる。"
	},
	abilities: [
		{
			name: {
				ja: "ひょうせつのまい"
			},
			effect: {
				ja: "自分の番に何回でも使える。自分の手札から水エネルギーを1枚選び、ベンチの水ポケモンにつける。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "オーロラビーム"
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
