import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "閃電鳥",
		ja: "サンダー"
	},

	illustrator: "AKIRA EGAWA",

	category: "Pokemon",

	hp: 110,

	types: [
		"Lightning"
	],

	description: {
		'zh-tw': "據說藏身在雷雲中的傳說的寶可夢。能夠隨心所欲地操縱雷電。",
		ja: "雷雲の 中に いると 言われる 伝説の ポケモン。 雷を 自在に 操る。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "啄鑽",
				ja: "ドリルくちばし"
			},
			damage: 20,
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "狙擊雷電",
				ja: "スナイプサンダー"
			},
			effect: {
				'zh-tw': "將這隻寶可夢身上附加的能量全部丟棄，對手的1隻「寶可夢【V】・【GX】」受到160點傷害。[在備戰區不計算弱點・抵抗力。]",
				ja: "このポケモンについているエネルギーをすべてトラッシュし、相手の「ポケモンV・GX」1匹に、160ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
			},
			cost: [
				"Lightning",
				"Lightning",
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

	rarity: "Rare",

	dexId: [
		145
	],

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
