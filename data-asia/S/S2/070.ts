import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "カラマネロV"
	},
	rarity: "Double rare",
	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 210,
	types: [
		"Darkness"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				ja: "ひきずりだす"
			},
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンに30ダメージ。"
			},
			cost: [
				"Darkness",
				"Colorless"
			]
		},
		{
			name: {
				ja: "ブレインシェイク"
			},
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。"
			},
			cost: [
				"Darkness",
				"Darkness",
				"Colorless"
			],
			damage: 130
		}
	],
	suffix: "V",
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "holo"
		}
	],
	dexId: [
		687
	]
}

export default card
