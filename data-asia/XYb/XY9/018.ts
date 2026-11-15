import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ギャラドスEX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 180,
	types: [
		"Water"
	],
	stage: "Basic",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "おおしけ"
			},
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数ぶんまで、自分の山札から水エネルギーを選び、このポケモンにつける。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "スプラッシュバーン"
			},
			effect: {
				ja: "自分のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless"
			],
			damage: 130
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 4,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
