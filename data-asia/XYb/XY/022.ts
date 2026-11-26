import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ガマゲロゲEX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "None",
	category: "Pokemon",
	hp: 180,
	types: [
		"Water"
	],
	dexId: [
		537
	],
	stage: "Basic",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "ブルブルパンチ"
			},
			effect: {
				ja: "次の相手の番、相手は手札からグッズを出して使えない。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "グレネードハンマー"
			},
			effect: {
				ja: "自分のベンチポケモンを2匹選び、そのポケモンにも、それぞれ30ダメージ。［ベンチは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Water",
				"Water",
				"Colorless"
			],
			damage: 130
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 3,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
