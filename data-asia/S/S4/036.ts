import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "斑斑馬",
		ja: "シママ"
	},

	illustrator: "Saya Tsuruta",

	category: "Pokemon",

	hp: 60,

	types: [
		"Lightning"
	],

	description: {
		'zh-tw': "放電時鬃毛會發光。利用鬃毛閃爍的次數及節奏與夥伴交談。",
		ja: "放電すると たてがみが 光る。 たてがみが 輝く 回数や リズムで 仲間と 会話している。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "電氣踢",
				ja: "エレキック"
			},
			damage: 20,
			cost: [
				"Lightning"
			]
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],

	retreat: 1,

	regulationMark: "D",

	rarity: "Common",

	dexId: [
		522
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
