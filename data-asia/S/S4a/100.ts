import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "八爪武師",
		ja: "オトスパス"
	},

	illustrator: "Shin Nagasawa",

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
				'zh-tw': "蛸固",
				ja: "たこがため"
			},
			effect: {
				'zh-tw': "受到這個招式的寶可夢，使用招式所需的能量增加2個【無】能量，且無法撤退。這個效果在這隻「八爪武師」離開戰鬥場前一直持續，且不會重複。",
				ja: "このワザを受けたポケモンは、ワザを使うためのエネルギーが無エネルギー2個ぶん多くなり、にげられない。この効果は、この「オトスパス」がバトル場をはなれるまで続き、重ならない。"
			},
			cost: [
				"Fighting",
				"Fighting"
			]
		},
		{
			name: {
				'zh-tw': "重重橫掃",
				ja: "ハードスイング"
			},
			effect: {
				'zh-tw': "這個招式的傷害不計算抵抗力。",
				ja: "このワザのダメージは抵抗力を計算しない。"
			},
			damage: 130,
			cost: [
				"Fighting",
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

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	],

	dexId: [
		853
	]
}

export default card
