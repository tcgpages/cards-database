import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ビクティニ"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		494
	],
	hp: 60,
	types: [
		"Fire"
	],
	stage: "Basic",
	description: {
		ja: "勝利を もたらす ポケモン。 ビクティニを 連れた トレーナーは どんな 勝負にも 勝てるという。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "しょうりのほし"
			},
			effect: {
				ja: "自分のポケモンのワザでコインを投げたとき使える。そのコインの結果をすべてなくし、はじめからコインを投げなおす。ビクティニが何匹いても、「しょうりのほし」は自分の番に1回しか使えない。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "アシストパワー"
			},
			effect: {
				ja: "このポケモンについているエネルギーをすべて、ベンチポケモン1匹につけ替える。"
			},
			cost: [
				"Fire",
				"Colorless"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "normal"
		},
		{
			type: "reverse",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "reverse"
		}
	]
}

export default card
