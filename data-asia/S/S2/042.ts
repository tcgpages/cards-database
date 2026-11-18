import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "スナバァ"
	},
	rarity: "Common",
	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 80,
	types: [
		"Psychic"
	],
	stage: "Basic",
	dexId: [
		769
	],
	description: {
		ja: "砂遊びで 作った 砂山は 帰るとき 壊さないと 魂が 宿り スナバァに なるかもしれない。"
	},
	attacks: [
		{
			name: {
				ja: "そっとのせる"
			},
			effect: {
				ja: "相手のポケモン1匹に、ダメカンを1個のせる。"
			},
			cost: [
				"Psychic"
			]
		}
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "－30"
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
