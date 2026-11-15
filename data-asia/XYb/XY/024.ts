import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ケロマツ"
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Water"
	],
	stage: "Basic",
	dexId: [
		656
	],
	description: {
		ja: "繊細な 泡で 体を 包み 肌を 守る。 のんきに 見せかけて 抜け目なく 周囲を うかがう。"
	},
	attacks: [
		{
			name: {
				ja: "あわ"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Water"
			]
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 1,
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
