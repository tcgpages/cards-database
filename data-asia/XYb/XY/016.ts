import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "シャワーズ"
	},
	illustrator: "kirisAki",
	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: [
		"Water"
	],
	stage: "Stage1",
	dexId: [
		134
	],
	description: {
		ja: "水中での 生活に 適した 体に 進化した。 水に 溶けると 見えなくなる。"
	},
	abilities: [
		{
			name: {
				ja: "アクアエフェクト"
			},
			effect: {
				ja: "このポケモンがいるかぎり、自分の1進化ポケモン全員は、もとのタイプに加え水タイプも持つ。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "ハイドロスプラッシュ"
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless"
			],
			damage: 70
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
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
