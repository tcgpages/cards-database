import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "以歐路普V",
		ja: "イオルブV"
	},

	illustrator: "5ban Graphics",

	category: "Pokemon",

	hp: 180,

	types: [
		"Grass"
	],

	dexId: [
		826
	],
	stage: "Basic",

	suffix: "V",

	attacks: [
		{
			name: {
				'zh-tw': "狡兔三窟",
				ja: "ひるがえす"
			},
			effect: {
				'zh-tw': "若希望，將這隻寶可夢與備戰寶可夢互換。",
				ja: "のぞむなら、このポケモンをベンチポケモンと入れ替える。"
			},
			damage: 20,
			cost: [
				"Grass"
			]
		},
		{
			name: {
				'zh-tw': "神秘波",
				ja: "ミステリーウェーブ"
			},
			effect: {
				'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×30點傷害。",
				ja: "相手のバトルポケモンについているエネルギーの数×30ダメージ追加。"
			},
			damage: "50+",
			cost: [
				"Grass",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],

	retreat: 1,

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
