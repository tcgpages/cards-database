import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "スワンナ"
	},
	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: [
		"Water"
	],
	stage: "Stage1",
	dexId: [
		581
	],
	description: {
		ja: "夜明けと ともに スワンナたちは 踊りはじめる。 真ん中で 踊る スワンナが 群れの リーダー。"
	},
	attacks: [
		{
			name: {
				ja: "つばさでうつ"
			},
			cost: [
				"Colorless"
			],
			damage: 20
		},
		{
			name: {
				ja: "ブレイブバード"
			},
			effect: {
				ja: "このポケモンにも20ダメージ。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 80
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		}
	],
	retreat: 0,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
