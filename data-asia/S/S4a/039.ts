import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "淚眼蜥",
		ja: "メッソン"
	},

	illustrator: "Megumi Mizutani",

	category: "Pokemon",

	hp: 60,

	types: [
		"Water"
	],

	description: {
		'zh-tw': "害怕時流下的淚水中含有相當於１００顆洋蔥的催淚成分，能讓對手淚流不止。",
		ja: "怯えると 玉ねぎ１００個分の 催涙成分を もつ 涙を 流して もらい泣き させる。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "水槍",
				ja: "みずでっぽう"
			},
			damage: 20,
			cost: [
				"Water"
			]
		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],

	retreat: 1,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	],

	dexId: [
		816
	]
}

export default card
