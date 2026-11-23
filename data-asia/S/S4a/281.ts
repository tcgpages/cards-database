import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "フォクスライ"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 100,
	types: [
		"Darkness"
	],
	evolveFrom: {
		ja: "クスネ"
	},
	stage: "Stage1",
	dexId: [
		828
	],
	description: {
		ja: "狙った 獲物は こっそり マーキング。 においを 辿って 油断 したころ 盗みに 来るぞ。"
	},
	attacks: [
		{
			name: {
				ja: "どろぼう"
			},
			effect: {
				ja: "相手の手札を見て、その中からカードを1枚選び、相手の山札の下にもどす。"
			},
			cost: [
				"Darkness"
			],
			damage: 20
		},
		{
			name: {
				ja: "やみのキバ"
			},
			cost: [
				"Darkness",
				"Colorless",
				"Colorless"
			],
			damage: 90
		}
	],
	weaknesses: [
		{
			type: "Grass",
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
