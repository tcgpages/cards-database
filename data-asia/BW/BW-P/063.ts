import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "コアルヒー"
	},
	rarity: "Promo",
	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 60,
	types: [
		"Water"
	],
	stage: "Basic",
	dexId: [
		580
	],
	description: {
		ja: "敵に 襲われると 全身の 羽毛から 水しぶきを 出す。 水煙に 紛れて 逃げるのだ。"
	},
	attacks: [
		{
			name: {
				ja: "はねやすめ"
			},
			effect: {
				ja: "このポケモンのHPを「40」回復する。次の自分の番、このポケモンは、にげられない。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "みずかけ"
			},
			cost: [
				"Water",
				"Water"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		}
	],
	retreat: 1
}

export default card
