import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ケルディオEX"
	},
	illustrator: "Toyste Beach",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		647
	],
	hp: 170,
	types: [
		"Water"
	],
	stage: "Basic",
	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "かけつける"
			},
			effect: {
				ja: "このポケモンを自分のバトルポケモンと入れ替える。この特性は、このポケモンがベンチにいるなら、自分の番に1回使える。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "しんぴのつるぎ"
			},
			effect: {
				ja: "このポケモンについている水エネルギーの数×20ダメージを追加。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "50+"
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "holo",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "holo"
		}
	]
}

export default card
