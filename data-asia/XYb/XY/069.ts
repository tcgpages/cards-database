import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ジガルデEX"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 190,
	types: [
		"Fighting"
	],
	stage: "Basic",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "だいちのこどう"
			},
			effect: {
				ja: "場にスタジアムが出ているなら、20ダメージを追加。"
			},
			cost: [
				"Fighting"
			],
			damage: "20+"
		},
		{
			name: {
				ja: "セルストーム"
			},
			effect: {
				ja: "このポケモンのHPを「30」回復する。"
			},
			cost: [
				"Fighting",
				"Colorless"
			],
			damage: 60
		},
		{
			name: {
				ja: "グランドフォース"
			},
			cost: [
				"Fighting",
				"Fighting",
				"Colorless"
			],
			damage: 100
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 3,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
