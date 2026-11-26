import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "クズモー"
	},
	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: [
		"Psychic"
	],
	stage: "Basic",
	dexId: [
		690
	],
	description: {
		ja: "腐った 海藻に そっくり。 敵の 目を ごまかしながら 進化する 力を 蓄える。"
	},
	attacks: [
		{
			name: {
				ja: "かくれる"
			},
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。"
			},
			cost: [
				"Psychic"
			]
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
