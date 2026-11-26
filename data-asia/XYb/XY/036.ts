import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "バチュル"
	},
	illustrator: "TOKIYA",
	rarity: "None",
	category: "Pokemon",
	hp: 30,
	types: [
		"Lightning"
	],
	stage: "Basic",
	dexId: [
		595
	],
	description: {
		ja: "自分では 電気を つくれないので 他の 大きな ポケモンに とりつき 静電気を 吸いとる。"
	},
	attacks: [
		{
			name: {
				ja: "かじる"
			},
			cost: [
				"Lightning"
			],
			damage: 10
		},
		{
			name: {
				ja: "よるのこうしん"
			},
			effect: {
				ja: "自分のトラッシュにあるワザ「よるのこうしん」を持つポケモンの枚数×20ダメージ。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "20×"
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
			type: "normal"
		},
		{
			type: "reverse",
			foil: "mirror"
		}
	]
}

export default card
