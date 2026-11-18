import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "キバゴ"
	},
	rarity: "Promo",
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 50,
	types: [
		"Colorless"
	],
	stage: "Basic",
	dexId: [
		610
	],
	description: {
		ja: "木の実を キバで 砕いて 食べる。 何回も 生え変わることで 強く 鋭い キバに なる。"
	},
	attacks: [
		{
			name: {
				ja: "りゅうのいかり"
			},
			effect: {
				ja: "コインを2回投げ、1回でもウラなら、このワザは失敗。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 50
		}
	],
	retreat: 1
}

export default card
