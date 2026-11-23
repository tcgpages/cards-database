import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ワルビル"
	},
	variants: [{ type: "reverse" }],
	rarity: "Promo",
	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 90,
	types: [
		"Darkness"
	],
	stage: "Stage1",
	dexId: [
		552
	],
	description: {
		ja: "数匹で 群れを 作る。 眼球を カバーする 膜が 砂あらしから 目を 守る。"
	},
	attacks: [
		{
			name: {
				ja: "どろかけ"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "どつく"
			},
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless"
			],
			damage: 70
		}
	],
	evolveFrom: {
		ja: "メグロコ"
	},
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		}
	],
	retreat: 3
}

export default card
