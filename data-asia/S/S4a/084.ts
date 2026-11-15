import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "愛管侍V",
		ja: "イエッサンV"
	},

	illustrator: "5ban Graphics",

	category: "Pokemon",

	hp: 180,

	types: [
		"Psychic"
	],

	stage: "Basic",

	suffix: "V",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "貼心",
				ja: "こころくばり"
			},
			effect: {
				'zh-tw': "在自己的回合時，可使用1次。將自己的戰鬥寶可夢恢復「20」HP。",
				ja: "自分の番に1回使える。自分のバトルポケモンのHPを「20」回復する。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "精神強念",
				ja: "サイコキネシス"
			},
			effect: {
				'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×60點傷害。",
				ja: "相手のバトルポケモンについているエネルギーの数×60ダメージ追加。"
			},
			damage: "10+",
			cost: [
				"Psychic",
				"Colorless",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
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
