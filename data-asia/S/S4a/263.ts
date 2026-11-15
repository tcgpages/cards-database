import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル ネギガナイト"
	},
	illustrator: "Kouki Saitou",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 130,
	types: [
		"Fighting"
	],
	stage: "Stage1",
	dexId: [
		865
	],
	description: {
		ja: "歴戦を 生き抜いた ものが この姿に 進化する。 ネギが 枯れるとき 戦場を 去る。"
	},
	attacks: [
		{
			name: {
				ja: "つきさす"
			},
			cost: [
				"Fighting"
			],
			damage: 40
		},
		{
			name: {
				ja: "スターアサルト"
			},
			effect: {
				ja: "このワザを使ったなら、このポケモンは、バトル場をはなれるまで「スターアサルト」が使えない。"
			},
			cost: [
				"Fighting",
				"Colorless",
				"Colorless"
			],
			damage: 180
		}
	],
	weaknesses: [
		{
			type: "Psychic",
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
