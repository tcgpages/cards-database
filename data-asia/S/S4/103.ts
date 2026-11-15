import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル ヒヒダルマV"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: [
		"Water"
	],
	stage: "Basic",
	suffix: "V",
	attacks: [
		{
			name: {
				ja: "いてつくずつき"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Water",
				"Colorless"
			],
			damage: 50
		},
		{
			name: {
				ja: "ひょうけつざん"
			},
			effect: {
				ja: "このポケモンにも30ダメージ。"
			},
			cost: [
				"Water",
				"Water",
				"Colorless"
			],
			damage: 190
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
