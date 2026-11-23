import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "フリーザー"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: [
		"Water"
	],
	dexId: [
		144
	],
	stage: "Basic",
	abilities: [
		{
			name: {
				ja: "Δ（デルタ）プラス"
			},
			effect: {
				ja: "このポケモンが、ワザのダメージで相手のポケモンをきぜつさせたなら、サイドを1枚多くとる。"
			},
			type: "Ancient Trait"
		}
	],
	attacks: [
		{
			name: {
				ja: "つめたいといき"
			},
			effect: {
				ja: "相手のバトルポケモンをねむりにする。"
			},
			cost: [
				"Water"
			]
		},
		{
			name: {
				ja: "トライエッジ"
			},
			effect: {
				ja: "コインを3回投げ、オモテの数×40ダメージを追加。"
			},
			cost: [
				"Water",
				"Water",
				"Colorless"
			],
			damage: "20+"
		}
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
			foil: "mirror"
		}
	]
}

export default card
