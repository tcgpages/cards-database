import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨石丁",
		ja: "イシヘンジン"
	},

	illustrator: "Kouki Saitou",

	category: "Pokemon",

	hp: 140,

	types: [
		"Fighting"
	],

	description: {
		'zh-tw': "佇立在大草原上，每天眺望著日升日落。擅長強而有力的踢技。",
		ja: "大草原の 中で たたずみ 陽の 傾きを 眺めて 暮らす。 ダイナミックな 蹴り技が 得意。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "百萬噸重踢",
				ja: "メガトンキック"
			},
			damage: 80,
			cost: [
				"Fighting",
				"Colorless",
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "力量壓制",
				ja: "パワープレス"
			},
			effect: {
				'zh-tw': "若身上附有的能量比使用這個招式所需的能量多1個，則增加60點傷害。",
				ja: "このワザを使うためのエネルギーより、1個多くエネルギーがついているなら、60ダメージ追加。"
			},
			damage: "120+",
			cost: [
				"Fighting",
				"Colorless",
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

	rarity: "None",

	variants: [
		{ type: "holo", languages: ["ja"] }
	],

	dexId: [
		874
	]
}

export default card
