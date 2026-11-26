import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ゲッコウガBREAK"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 170,
	types: [
		"Water"
	],
	dexId: [
		658
	],
	evolveFrom: {
		ja: "ゲッコウガ"
	},
	stage: "BREAK",
	abilities: [
		{
			name: {
				ja: "きょだいみずしゅりけん"
			},
			effect: {
				ja: "自分の手札から水エネルギーを1枚選び、トラッシュする。その後、相手のポケモンを1匹選び、ダメカンを6個のせる。この特性は、このポケモンがバトル場にいるなら、自分の番に1回使える。"
			},
			type: "Ability"
		}
	],
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
