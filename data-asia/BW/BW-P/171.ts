import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ヒコザル"
	},
	rarity: "Promo",
	illustrator: "sui",
	category: "Pokemon",
	hp: 50,
	types: [
		"Fire"
	],
	stage: "Basic",
	dexId: [
		390
	],
	description: {
		ja: "とても 身軽な ポケモン。 まわりが 燃えないように おしりの 炎を 消してから 眠る。"
	},
	attacks: [
		{
			name: {
				ja: "ほのお"
			},
			cost: [
				"Fire"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
