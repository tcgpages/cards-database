import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "メガニウム"
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: [
		"Grass"
	],
	stage: "Stage2",
	dexId: [
		154
	],
	description: {
		ja: "メガニウムが 吐き出す 息には 枯れた 草木を よみがえらせる 力が 秘められている。"
	},
	abilities: [
		{
			name: {
				ja: "しんりょく"
			},
			effect: {
				ja: "このポケモンの残りHPが「50」以下なら、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+70」される。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "グリーンフォース"
			},
			effect: {
				ja: "相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。"
			},
			cost: [
				"Grass",
				"Grass",
				"Colorless"
			],
			damage: 50
		}
	],
	weaknesses: [
		{
			type: "Fire",
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
