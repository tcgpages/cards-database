import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ギラティナEX"
	},
	illustrator: "PLANETA",
	rarity: "None",
	category: "Pokemon",
	hp: 170,
	types: [
		"Dragon"
	],
	dexId: [
		487
	],
	stage: "Basic",
	suffix: "EX",
	abilities: [
		{
			name: {
				ja: "はんこつのはどう"
			},
			effect: {
				ja: "このポケモンは、相手のM進化ポケモンからワザのダメージや効果を受けない。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "カオスウィール"
			},
			effect: {
				ja: "次の相手の番、相手は手札から、「ポケモンのどうぐ」「特殊エネルギー」を出してつけられず「スタジアム」も出せない。"
			},
			cost: [
				"Grass",
				"Psychic",
				"Colorless",
				"Colorless"
			],
			damage: 100
		}
	],
	weaknesses: [
		{
			type: "Fairy",
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
