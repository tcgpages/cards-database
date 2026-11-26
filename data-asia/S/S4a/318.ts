import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ドラパルトVMAX"
	},
	illustrator: "aky CG Works",
	rarity: "Shiny rare VMAX",
	category: "Pokemon",
	hp: 320,
	types: [
		"Psychic"
	],
	dexId: [
		887
	],
	evolveFrom: {
		ja: "ドラパルトV"
	},
	stage: "VMAX",
	attacks: [
		{
			name: {
				ja: "ひきさく"
			},
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。"
			},
			cost: [
				"Psychic"
			],
			damage: 60
		},
		{
			name: {
				ja: "ダイファントム"
			},
			effect: {
				ja: "ダメカン5個を、相手のベンチポケモンに好きなようにのせる。"
			},
			cost: [
				"Psychic",
				"Psychic"
			],
			damage: 130
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
