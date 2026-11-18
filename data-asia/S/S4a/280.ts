import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "クスネ"
	},
	illustrator: "Saya Tsuruta",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: [
		"Darkness"
	],
	stage: "Basic",
	dexId: [
		827
	],
	description: {
		ja: "ほかの ポケモンが みつけた 餌を 掠めて 暮らしている。 ふかふかの 肉球は 足音を たてない。"
	},
	attacks: [
		{
			name: {
				ja: "そそのかす"
			},
			effect: {
				ja: "相手は相手自身の手札をすべてウラにして切り、相手の山札の下にもどす。その後、相手は山札を3枚引く。"
			},
			cost: [
				"Darkness"
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
