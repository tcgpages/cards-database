import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "シママ"
	},
	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: [
		"Lightning"
	],
	stage: "Basic",
	dexId: [
		522
	],
	description: {
		ja: "放電すると たてがみが 光る。 たてがみが 輝く 回数や リズムで 仲間と 会話している。"
	},
	attacks: [
		{
			name: {
				ja: "とつげき"
			},
			effect: {
				ja: "このポケモンにも10ダメージ。"
			},
			cost: [
				"Colorless"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
