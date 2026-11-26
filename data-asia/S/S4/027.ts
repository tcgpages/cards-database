import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "古月鳥",
		ja: "ウッウ"
	},

	illustrator: "Sanosuke Sakuma",

	category: "Pokemon",

	hp: 110,

	types: [
		"Water"
	],

	description: {
		'zh-tw': "因為很貪吃，想把整隻肥嘟嘟的刺梭魚吞下去，結果卻卡在了喉嚨裡。",
		ja: "大食らいなので まるまる 太った サシカマスを 飲み込もうとして 喉に 詰まらせてしまった。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "連續一口飛彈",
				ja: "れんぞくうのミサイル"
			},
			effect: {
				'zh-tw': "將自己的備戰區的任意數量的「刺梭魚」丟棄，造成其張數×60點傷害。",
				ja: "自分のベンチの「サシカマス」を好きなだけトラッシュし、その枚数×60ダメージ。"
			},
			damage: "60×",
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

	rarity: "Common",

	dexId: [
		845
	],

	variants: [
		{
			type: "normal",
			languages: [
				"ja"
			]
		}
	]
}

export default card
