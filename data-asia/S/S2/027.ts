import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル ヒヒダルマ"
	},
	rarity: "Uncommon",
	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 140,
	types: [
		"Water"
	],
	stage: "Stage1",
	dexId: [
		555
	],
	description: {
		ja: "頭の 上の 雪玉に エサを しまって 持ち帰る。 吹雪の 日は 人里まで 降りてくる。"
	},
	attacks: [
		{
			name: {
				ja: "ふぶき"
			},
			effect: {
				ja: "相手のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless"
			],
			damage: 80
		},
		{
			name: {
				ja: "かちわりヘッド"
			},
			effect: {
				ja: "次の自分の番、このポケモンは「かちわりヘッド」が使えない。"
			},
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless"
			],
			damage: 170
		}
	],
	evolveFrom: {
		ja: "ガラル ダルマッカ"
	},
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	retreat: 3,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
