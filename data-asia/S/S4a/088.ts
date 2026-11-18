import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "多龍巴魯托V",
		ja: "ドラパルトV"
	},

	illustrator: "aky CG Works",

	category: "Pokemon",

	hp: 210,

	types: [
		"Psychic"
	],

	stage: "Basic",

	suffix: "V",

	attacks: [
		{
			name: {
				'zh-tw': "咬住",
				ja: "かみつく"
			},
			damage: 30,
			cost: [
				"Psychic"
			]
		},
		{
			name: {
				'zh-tw': "進擊噴射",
				ja: "アサルトジェット"
			},
			effect: {
				'zh-tw': "在這個回合，若從備戰區將這隻寶可夢放置於戰鬥場，則增加80點傷害。",
				ja: "この番、このポケモンがベンチからバトル場に出ていたなら、80ダメージ追加。"
			},
			damage: "60+",
			cost: [
				"Psychic",
				"Psychic"
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
