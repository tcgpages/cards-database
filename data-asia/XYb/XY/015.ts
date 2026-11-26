import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ボルケニオンEX"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 180,
	types: [
		"Fire",
		"Water"
	],
	dexId: [
		721
	],
	stage: "Basic",
	suffix: "EX",
	abilities: [
		{
			name: {
				ja: "スチームアップ"
			},
			effect: {
				ja: "自分の手札から炎エネルギーを1枚選び、トラッシュする。その場合、この番、自分の炎タイプのたねポケモンが使うワザの、相手のバトルポケモンへのダメージは、「+30」される。この特性は、自分の番に1回使える。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "ボルカニックヒート"
			},
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。"
			},
			cost: [
				"Fire",
				"Fire",
				"Colorless"
			],
			damage: 130
		}
	],
	weaknesses: [
		{
			type: "Water",
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
