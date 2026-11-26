import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "シェルダー"
	},
	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: [
		"Water"
	],
	stage: "Basic",
	dexId: [
		90
	],
	description: {
		ja: "殻で 挟みこむのは やわらかい 中身を さらけ出すので 一か八かの 手段なのだ。"
	},
	attacks: [
		{
			name: {
				ja: "シェルブレード"
			},
			effect: {
				ja: "コインを1回投げオモテなら、10ダメージを追加。"
			},
			cost: [
				"Water"
			],
			damage: "10+"
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
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
