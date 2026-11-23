import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル マタドガス"
	},
	illustrator: "Kouki Saitou",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 130,
	types: [
		"Darkness"
	],
	evolveFrom: {
		ja: "ドガース"
	},
	stage: "Stage1",
	dexId: [
		110
	],
	description: {
		ja: "大気の 汚い 成分を 吸収し きれいな 空気を フンの 代わりに 吐き出している。"
	},
	abilities: [
		{
			name: {
				ja: "かがくへんかガス"
			},
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、相手の場のポケモンの特性（「かがくへんかガス」をのぞく）は、すべてなくなる。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "バッドポイズン"
			},
			effect: {
				ja: "相手のバトルポケモンをどくにする。このどくでのせるダメカンの数は4個になる。"
			},
			cost: [
				"Darkness"
			]
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 3,
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
