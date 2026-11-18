import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 達摩狒狒V",
		ja: "ガラル ヒヒダルマV"
	},

	illustrator: "5ban Graphics",

	category: "Pokemon",

	hp: 220,

	types: [
		"Water"
	],

	stage: "Basic",

	suffix: "V",

	attacks: [
		{
			name: {
				'zh-tw': "嚴寒頭錘",
				ja: "いてつくずつき"
			},
			effect: {
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			damage: 50,
			cost: [
				"Water",
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "結冰斬",
				ja: "ひょうけつざん"
			},
			effect: {
				'zh-tw': "這隻寶可夢也受到30點傷害。",
				ja: "このポケモンにも30ダメージ。"
			},
			damage: 190,
			cost: [
				"Water",
				"Water",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],

	retreat: 2,

	regulationMark: "D",

	rarity: "Holo Rare V",

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
