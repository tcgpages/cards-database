import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "キュレム"
	},
	variants: [{ type: "reverse" }],
	rarity: "Promo",
	illustrator: "Ryo Ueda",
	category: "Pokemon",
	hp: 130,
	types: [
		"Dragon"
	],
	stage: "Basic",
	dexId: [
		646
	],
	description: {
		ja: "極低温の 冷気を 作る 力を 持っているが 自分の 体を 凍らせてしまっている。"
	},
	attacks: [
		{
			name: {
				ja: "ドラゴンクロー"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 60
		},
		{
			name: {
				ja: "ふぶき"
			},
			effect: {
				ja: "相手のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Water",
				"Psychic",
				"Colorless",
				"Colorless"
			],
			damage: 90
		}
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		}
	],
	retreat: 2
}

export default card
