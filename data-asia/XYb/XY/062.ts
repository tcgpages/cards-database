import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ルカリオEX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "None",
	category: "Pokemon",
	hp: 180,
	types: [
		"Fighting"
	],
	stage: "Basic",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "スカッドジャブ"
			},
			effect: {
				ja: "このワザのダメージは抵抗力の計算をしない。"
			},
			cost: [
				"Fighting"
			],
			damage: 30
		},
		{
			name: {
				ja: "スクリューブロー"
			},
			effect: {
				ja: "のぞむなら、自分の手札が6枚になるように、山札を引いてよい。"
			},
			cost: [
				"Fighting",
				"Fighting"
			],
			damage: 60
		},
		{
			name: {
				ja: "サマーソルトハイ"
			},
			cost: [
				"Fighting",
				"Fighting",
				"Fighting"
			],
			damage: 100
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
