import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "メガライボルトEX"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 210,
	types: [
		"Lightning"
	],
	dexId: [
		310
	],
	evolveFrom: {
		ja: "ライボルトEX"
	},
	stage: "MEGA",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "ターボボルト"
			},
			effect: {
				ja: "自分のトラッシュから基本エネルギーを2枚選び、ベンチポケモン1匹につける。"
			},
			cost: [
				"Lightning",
				"Colorless"
			],
			damage: 110
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
	retreat: 0,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
