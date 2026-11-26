import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "藍鴉",
		ja: "アオガラス"
	},

	illustrator: "Anesaki Dynamic",

	category: "Pokemon",

	hp: 80,

	types: [
		"Colorless"
	],

	description: {
		'zh-tw': "頭腦聰明，懂得使用工具。會用爪子抓起小石頭投向敵人，或是用繩子把敵人綑住。",
		ja: "足で 小石を つかんで 投げたり ロープを 敵に 巻きつけるなど 道具を あつかう 知恵を もつ。"
	},

	evolveFrom: {
		ja: "ココガラ"
	},
	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "啄食",
				ja: "ついばむ"
			},
			effect: {
				'zh-tw': "在造成傷害前，將對手的戰鬥寶可夢身上附加的「寶可夢道具」丟棄。",
				ja: "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。"
			},
			damage: 20,
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "啄鑽",
				ja: "ドリルくちばし"
			},
			damage: 50,
			cost: [
				"Colorless",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Lightning",
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

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	],

	dexId: [
		822
	]
}

export default card
