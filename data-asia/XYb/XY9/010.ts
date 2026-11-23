import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ドンメル"
	},
	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: [
		"Fire"
	],
	stage: "Basic",
	dexId: [
		322
	],
	description: {
		ja: "１２００度の マグマを 体内に ためこんでいる。 炎の 技を 使うと コブは 小さく しぼむ。"
	},
	attacks: [
		{
			name: {
				ja: "たいあたり"
			},
			cost: [
				"Colorless"
			],
			damage: 10
		},
		{
			name: {
				ja: "かえん"
			},
			cost: [
				"Fire",
				"Fire",
				"Colorless"
			],
			damage: 40
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 3,
	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
