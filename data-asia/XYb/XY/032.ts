import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "サンダースEX"
	},
	illustrator: "Naoki Saito",
	rarity: "None",
	category: "Pokemon",
	hp: 160,
	types: [
		"Lightning"
	],
	stage: "Basic",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "スピードスター"
			},
			effect: {
				ja: "このワザのダメージは、弱点・抵抗力と、相手のバトルポケモンにかかっている効果の計算をしない。"
			},
			cost: [
				"Lightning"
			],
			damage: 30
		},
		{
			name: {
				ja: "フラッシュレイ"
			},
			effect: {
				ja: "次の相手の番、このポケモンはたねポケモンからワザのダメージを受けない。"
			},
			cost: [
				"Lightning",
				"Colorless",
				"Colorless"
			],
			damage: 70
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		}
	],
	retreat: 0,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
