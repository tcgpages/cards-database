import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "キュウコンV"
	},
	rarity: "Double rare",
	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 200,
	types: [
		"Fire"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				ja: "きゅうびへんげ"
			},
			effect: {
				ja: "相手のバトルポケモンが持っているワザを1つ選び、このワザとして使う。"
			},
			cost: [
				"Fire",
				"Colorless",
				"Colorless"
			]
		},
		{
			name: {
				ja: "かえんほうしゃ"
			},
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 180
		}
	],
	suffix: "V",
	weaknesses: [
		{
			type: "Water",
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
		38
	]
}

export default card
