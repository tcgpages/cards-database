import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトカゲ"
	},
	illustrator: "match",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		4
	],
	hp: 70,
	types: [
		"Fire"
	],
	stage: "Basic",
	description: {
		ja: "ヒトカゲの しっぽの 炎は 命の ともしび。 元気な ときは 炎も 力強く 燃え上がる。"
	},
	attacks: [
		{
			name: {
				ja: "すいこむ"
			},
			effect: {
				ja: "自分のトラッシュから炎エネルギーを2枚選び、このポケモンにつける。"
			},
			cost: [
				"Fire"
			]
		},
		{
			name: {
				ja: "ほのお"
			},
			cost: [
				"Fire",
				"Colorless"
			],
			damage: 20
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 2,
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
