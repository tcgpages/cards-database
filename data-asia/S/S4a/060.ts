import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "顫弦蠑螈VMAX",
		ja: "ストリンダーVMAX"
	},

	illustrator: "5ban Graphics",

	category: "Pokemon",

	hp: 320,

	types: [
		"Lightning"
	],

	dexId: [
		849
	],
	evolveFrom: {
		ja: "ストリンダーV"
	},
	stage: "VMAX",

	attacks: [
		{
			name: {
				'zh-tw': "超極巨引暴全場",
				ja: "キョダイライオット"
			},
			effect: {
				'zh-tw': "若對手的戰鬥寶可夢【中毒】，則增加80點傷害。",
				ja: "相手のバトルポケモンがどくなら、80ダメージ追加。"
			},
			damage: "160+",
			cost: [
				"Lightning",
				"Lightning",
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

	retreat: 2,

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
