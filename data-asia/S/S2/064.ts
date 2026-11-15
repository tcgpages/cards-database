import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル マタドガス"
	},
	rarity: "Rare",
	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 130,
	types: [
		"Darkness"
	],
	stage: "Stage1",
	dexId: [
		110
	],
	description: {
		ja: "大気の 汚い 成分を 吸収し きれいな 空気を フンの 代わりに 吐き出している。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "かがくへんかガス"
			},
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、相手の場のポケモンの特性（「かがくへんかガス」をのぞく）は、すべてなくなる。"
			}
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
	evolveFrom: {
		ja: "ドガース"
	},
	weaknesses: [
		{
			type: "Fighting",
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
