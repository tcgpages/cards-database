import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ミブリム"
	},
	illustrator: "otumami",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: [
		"Psychic"
	],
	stage: "Basic",
	dexId: [
		856
	],
	description: {
		ja: "頭の 突起で 生物の 気持ちを 感じとる。 穏やかな ものにしか 心を 開かない。"
	},
	attacks: [
		{
			name: {
				ja: "ともだちをさがす"
			},
			effect: {
				ja: "自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "サイコショット"
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
