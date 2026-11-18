import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "龍王蠍V",
		ja: "ドラピオンV"
	},

	illustrator: "Eske Yoshinob",

	category: "Pokemon",

	hp: 210,

	types: [
		"Darkness"
	],

	stage: "Basic",

	suffix: "V",

	attacks: [
		{
			name: {
				'zh-tw': "砸碎",
				ja: "たたきつぶす"
			},
			damage: 70,
			cost: [
				"Darkness",
				"Colorless",
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "危害爪",
				ja: "ハザードクロー"
			},
			effect: {
				'zh-tw': "將這隻寶可夢身上附加的2個能量丟棄，將對手的戰鬥寶可夢【中毒】與【麻痺】。",
				ja: "このポケモンについているエネルギーを2個トラッシュし、相手のバトルポケモンをどくとマヒにする。"
			},
			damage: 130,
			cost: [
				"Darkness",
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
