import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "木棉球",
		ja: "モンメン"
	},

	illustrator: "Mizue",

	category: "Pokemon",

	hp: 60,

	types: [
		"Psychic"
	],

	description: {
		'zh-tw': "會噴出棉花保護身體。有時會被颱風吹到地球的另一邊。",
		ja: "綿を 飛ばして 身を 守る。 台風の 風に 流され 地球の 裏側に いくことも。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "滾動衝撞",
				ja: "ころがりタックル"
			},
			damage: 10,
			cost: [
				"Psychic"
			]
		}
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],

	retreat: 1,

	regulationMark: "D",

	rarity: "Common",

	dexId: [
		546
	],

	variants: [
		{
			type: "normal",
			languages: [
				"ja"
			]
		}
	]
}

export default card
