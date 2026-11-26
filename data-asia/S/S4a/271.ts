import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "タタッコ"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: [
		"Fighting"
	],
	stage: "Basic",
	dexId: [
		852
	],
	description: {
		ja: "餌を 求め 地上に 上がる。 好奇心旺盛で 目にしたものは とりあえず 触手で 殴る。"
	},
	attacks: [
		{
			name: {
				ja: "しめつける"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Fighting"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 2,
	regulationMark: "D",
	variants: [
		{
			type: "holo",
			languages: [
				"ja"
			]
		}
	]
}

export default card
