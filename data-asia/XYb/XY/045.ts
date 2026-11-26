import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "エーフィEX"
	},
	illustrator: "Ayaka Yoshida",
	rarity: "None",
	category: "Pokemon",
	hp: 170,
	types: [
		"Psychic"
	],
	dexId: [
		196
	],
	stage: "Basic",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "ミラクルシャイン"
			},
			effect: {
				ja: "相手の進化しているポケモン全員の上から、それぞれ「進化カード」を1枚ずつはがして退化させる。はがしたカードは、相手の手札にもどす。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "サイコショック"
			},
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果の計算をしない。"
			},
			cost: [
				"Psychic",
				"Colorless",
				"Colorless"
			],
			damage: 70
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
