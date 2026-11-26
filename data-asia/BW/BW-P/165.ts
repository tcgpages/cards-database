import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトカゲ"
	},
	rarity: "Promo",
	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 70,
	types: [
		"Fire"
	],
	stage: "Basic",
	dexId: [
		4
	],
	description: {
		ja: "ヒトカゲの しっぽの 炎は 命の ともしび。 元気な ときは 炎も 力強く 燃え上がる。"
	},
	attacks: [
		{
			name: {
				ja: "すいこむ"
			},
			effect: {
				ja: "自分のトラッシュから[炎]エネルギーを2枚選び、このポケモンにつける。"
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
	retreat: 2
}

export default card
