import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "頓甲",
		ja: "ドンファン"
	},

	illustrator: "Hasegawa Saki",

	category: "Pokemon",

	hp: 150,

	types: [
		"Fighting"
	],

	description: {
		'zh-tw': "牙齒越大越長，在族群裡的地位就越高。牙齒的生長需要很長的時間。",
		ja: "キバが 長くて 大きいほど 群れの中での ランクが 高い。 キバが 伸びるには 時間が かかる。"
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "地震",
				ja: "じしん"
			},
			effect: {
				'zh-tw': "自己的所有備戰寶可夢也各受到20點傷害。[在備戰區不計算弱點・抵抗力。]",
				ja: "自分のベンチポケモン全員にも、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
			},
			damage: 120,
			cost: [
				"Fighting"
			]
		},
		{
			name: {
				'zh-tw': "重磅衝擊",
				ja: "ヘビーインパクト"
			},
			damage: 90,
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

	retreat: 4,

	regulationMark: "D",

	rarity: "Uncommon",

	dexId: [
		232
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
