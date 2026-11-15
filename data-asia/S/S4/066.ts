import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "土狼犬",
		ja: "ポチエナ"
	},

	illustrator: "ryoma uratsuka",

	category: "Pokemon",

	hp: 70,

	types: [
		"Darkness"
	],

	description: {
		'zh-tw': "有著敏銳的嗅覺，絕對不會放過自己盯上的獵物。個性非常執著。",
		ja: "鋭い きゅうかくで ねらった 獲物は 絶対に 逃がさない。 とっても しつこい 性格だ。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "咬住",
				ja: "かみつく"
			},
			damage: 10,
			cost: [
				"Darkness"
			]
		},
		{
			name: {
				'zh-tw': "後踢",
				ja: "うしろげり"
			},
			damage: 20,
			cost: [
				"Colorless",
				"Colorless"
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

	rarity: "Common",

	dexId: [
		261
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
