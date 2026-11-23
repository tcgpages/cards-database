import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "八爪武師",
		ja: "オトスパス"
	},

	illustrator: "Hitoshi Ariga",

	category: "Pokemon",

	hp: 130,

	types: [
		"Fighting"
	],

	description: {
		'zh-tw': "全身都是肌肉。會用觸手施展絞技，威力無與倫比。",
		ja: "全身が 筋肉の 塊。 触手を 使って 繰りだす 絞め技の 威力は 凄まじい。"
	},

	evolveFrom: {
		ja: "タタッコ"
	},
	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "鎖頭",
				ja: "ヘッドロック"
			},
			effect: {
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
			},
			damage: 30,
			cost: [
				"Fighting"
			]
		},
		{
			name: {
				'zh-tw': "觸手光炮",
				ja: "テンタクルバスター"
			},
			effect: {
				'zh-tw': "在上個自己的回合，若這隻寶可夢使用了「鎖頭」，則增加120點傷害。",
				ja: "前の自分の番、このポケモンが「ヘッドロック」を使っていたなら、120ダメージ追加。"
			},
			damage: "50+",
			cost: [
				"Fighting",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],

	retreat: 2,

	regulationMark: "D",

	rarity: "Uncommon",

	dexId: [
		853
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
