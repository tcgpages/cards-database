import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "チラーミィ"
	},
	rarity: "Promo",
	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 50,
	types: [
		"Colorless"
	],
	stage: "Basic",
	dexId: [
		572
	],
	description: {
		ja: "しっぽで お互いの 体を なでて あいさつ。 しっぽの 手入れを 欠かさず いつも きれいにしている。"
	},
	attacks: [
		{
			name: {
				ja: "かじる"
			},
			cost: [
				"Colorless"
			],
			damage: 10
		},
		{
			name: {
				ja: "しっぽでたたく"
			},
			cost: [
				"Colorless",
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
	retreat: 1
}

export default card
