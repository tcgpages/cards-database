import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトツキ"
	},
	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: [
		"Psychic"
	],
	stage: "Basic",
	dexId: [
		679
	],
	description: {
		ja: "剣の 柄を 握った 人の 腕に 青い 布を 巻きつけて 倒れるまで 命を 吸い取る。"
	},
	attacks: [
		{
			name: {
				ja: "ささる"
			},
			effect: {
				ja: "相手のバトルポケモンにダメカンを1個のせる。"
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
			value: "-20"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
