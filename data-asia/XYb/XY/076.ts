import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "カラマネロEX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "None",
	category: "Pokemon",
	hp: 170,
	types: [
		"Darkness"
	],
	dexId: [
		687
	],
	stage: "Basic",
	suffix: "EX",
	abilities: [
		{
			name: {
				ja: "きょうりょくさいみん"
			},
			effect: {
				ja: "この特性は、自分の手札からエネルギーをこのポケモンにつけるたび、1回使える。相手のバトルポケモンをねむりにする。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "からまりMAX"
			},
			effect: {
				ja: "このポケモンについているエネルギーの数ぶんコインを投げ、オモテの数×60ダメージ。"
			},
			cost: [
				"Darkness",
				"Colorless"
			],
			damage: "60×"
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
			type: "Psychic",
			value: "-20"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
