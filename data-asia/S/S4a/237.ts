import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ロトム"
	},
	illustrator: "kirisAki",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 80,
	types: [
		"Lightning"
	],
	stage: "Basic",
	dexId: [
		479
	],
	description: {
		ja: "ある 少年の 発明から ロトムを 活かした いろいろな 機械が 作られ始めたのだ。"
	},
	abilities: [
		{
			name: {
				ja: "ロトチョイス"
			},
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の山札から、名前に「ロトム」とつくグッズを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "でんきショック"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Lightning",
				"Colorless"
			],
			damage: 30
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
