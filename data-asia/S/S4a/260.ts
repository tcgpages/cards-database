import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ドロンチ"
	},
	illustrator: "tetsuya koizumi",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: [
		"Psychic"
	],
	evolveFrom: {
		ja: "ドラメシヤ"
	},
	stage: "Stage1",
	dexId: [
		886
	],
	description: {
		ja: "飛行速度は 時速２００キロ。ドラメシヤと いっしょに 戦い 無事に 進化するまで 世話をする。"
	},
	attacks: [
		{
			name: {
				ja: "よびだす"
			},
			effect: {
				ja: "自分の山札から「ドラメシヤ」を1枚選び、ベンチに出す。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "かみつく"
			},
			cost: [
				"Psychic",
				"Psychic"
			],
			damage: 40
		}
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
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
