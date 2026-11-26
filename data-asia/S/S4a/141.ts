import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "百變怪VMAX",
		ja: "メタモンVMAX"
	},

	illustrator: "PLANETA Tsuji",

	category: "Pokemon",

	hp: 320,

	types: [
		"Colorless"
	],

	dexId: [
		132
	],
	evolveFrom: {
		ja: "メタモンV"
	},
	stage: "VMAX",

	attacks: [
		{
			name: {
				'zh-tw': "極巨變身",
				ja: "ダイヘンシン"
			},
			effect: {
				'zh-tw': "選擇對手的戰鬥寶可夢持有的1個招式，作為這個招式使用。",
				ja: "相手のバトルポケモンが持っているワザを1つ選び、このワザとして使う。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],

	retreat: 3,

	regulationMark: "D",

	rarity: "Holo Rare VMAX",


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
