import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 死神板",
		ja: "ガラル デスバーン"
	},

	illustrator: "TOKIYA",

	category: "Pokemon",

	hp: 100,

	types: [
		"Fighting"
	],

	description: {
		'zh-tw': "被注入了強烈詛咒的古代繪畫在吸進哭哭面具的靈魂後就開始動起來了。",
		ja: "強い 呪いを こめて 描かれた 古代の 絵が デスマスの 魂を 取り込み 動きだした。"
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "散佈怨恨",
				ja: "うらみをばらまく"
			},
			effect: {
				'zh-tw': "將與這隻「伽勒爾 死神板」身上放置的傷害指示物的數量×2個的相同數量的傷害指示物，以任意方式放置於對手的寶可夢身上。",
				ja: "この「ガラル デスバーン」にのっているダメカンの数×2個ぶんのダメカンを、相手のポケモンに好きなようにのせる。"
			},
			cost: [
				"Colorless",
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "瘋狂之錘",
				ja: "マッドハンマー"
			},
			effect: {
				'zh-tw': "這隻寶可夢也受到30點傷害。",
				ja: "このポケモンにも30ダメージ。"
			},
			damage: 120,
			cost: [
				"Fighting",
				"Colorless",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		867
	]
}

export default card
