import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "咕妞妞",
		ja: "ゴニョニョ"
	},

	illustrator: "Tika Matsuno",

	category: "Pokemon",

	hp: 60,

	types: [
		"Colorless"
	],

	description: {
		'zh-tw': "察覺到危險時，會發出和噴射機同等音量的叫聲來讓敵人畏縮。",
		ja: "危険を 察知すると ジェット機と 同じ 音量の 鳴き声を 上げて 敵を ひるませるのだ。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "連續滾動",
				ja: "れんぞくころがり"
			},
			effect: {
				'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×40點傷害。",
				ja: "ウラが出るまでコインを投げ、オモテの数×40ダメージ。"
			},
			damage: "40×",
			cost: [
				"Colorless",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],

	retreat: 1,

	regulationMark: "D",

	rarity: "Common",

	dexId: [
		293
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
