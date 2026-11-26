import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル ダルマッカ"
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 80,
	types: [
		"Water"
	],
	stage: "Basic",
	dexId: [
		554
	],
	description: {
		ja: "雪深い 土地で 暮らすうち 炎袋は 冷えきり 退化。 冷気を つくる 器官が できた。"
	},
	attacks: [
		{
			name: {
				ja: "れいとうパンチ"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Water",
				"Colorless"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	retreat: 2,
	regulationMark: "D",
	variants: [
		{
			type: "holo",
			languages: [
				"ja"
			]
		}
	]
}

export default card
