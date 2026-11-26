import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "顫弦蠑螈V",
		ja: "ストリンダーV"
	},

	illustrator: "5ban Graphics",

	category: "Pokemon",

	hp: 210,

	types: [
		"Lightning"
	],

	dexId: [
		849
	],
	stage: "Basic",

	suffix: "V",

	attacks: [
		{
			name: {
				'zh-tw': "毒擊",
				ja: "どくづき"
			},
			effect: {
				'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
				ja: "相手のバトルポケモンをどくにする。"
			},
			damage: 20,
			cost: [
				"Lightning"
			]
		},
		{
			name: {
				'zh-tw': "電氣狂暴",
				ja: "エレキライオット"
			},
			effect: {
				'zh-tw': "若對手的戰鬥寶可夢【中毒】，則增加90點傷害。",
				ja: "相手のバトルポケモンがどくなら、90ダメージ追加。"
			},
			damage: "90+",
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
