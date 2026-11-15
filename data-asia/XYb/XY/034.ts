import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ライボルトEX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "None",
	category: "Pokemon",
	hp: 170,
	types: [
		"Lightning"
	],
	stage: "Basic",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "かけぬける"
			},
			effect: {
				ja: "相手のベンチポケモンを1匹選び、そのポケモンにも20ダメージ。［ベンチは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Colorless"
			],
			damage: 20
		},
		{
			name: {
				ja: "アサルトレーザー"
			},
			effect: {
				ja: "相手のバトルポケモンに「ポケモンのどうぐ」がついているなら、60ダメージを追加。"
			},
			cost: [
				"Lightning",
				"Colorless"
			],
			damage: "60+"
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
	retreat: 1,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
