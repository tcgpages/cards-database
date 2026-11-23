import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "焚焰蚣",
		ja: "マルヤクデ"
	},

	illustrator: "nagimiso",

	category: "Pokemon",

	hp: 130,

	types: [
		"Fire"
	],

	description: {
		'zh-tw': "發熱時的體溫大約有８００度。會像鞭子那樣彎曲身體，朝著敵人彈跳過去。",
		ja: "発熱時の 体温は およそ ８００度。 体を 鞭のように しならせて 跳びかかってくるぞ。"
	},

	evolveFrom: {
		ja: "ヤクデ"
	},
	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "連列火焰",
				ja: "つらなるほのお"
			},
			effect: {
				'zh-tw': "將對手的牌庫上方與這隻寶可夢身上附加的【火】能量相同數量的卡丟棄。",
				ja: "このポケモンについている炎エネルギーの数ぶん、相手の山札を上からトラッシュする。"
			},
			cost: [
				"Fire"
			]
		},
		{
			name: {
				'zh-tw': "灼燒",
				ja: "やきこがす"
			},
			effect: {
				'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
				ja: "相手のバトルポケモンをやけどにする。"
			},
			damage: 110,
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],

	retreat: 3,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	],

	dexId: [
		851
	]
}

export default card
