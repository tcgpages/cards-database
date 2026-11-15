import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ミュウ"
	},
	rarity: "Promo",
	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 60,
	types: [
		"Psychic"
	],
	stage: "Basic",
	dexId: [
		151
	],
	description: {
		ja: "あらゆる 技を 使うため ポケモンの 先祖と 考える 学者が たくさん いる。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "とうし"
			},
			effect: {
				ja: "相手の手札を見る。この特性は、このポケモンがバトル場にいるなら、自分の番に1回使える。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "サイコエクスチェンジ"
			},
			effect: {
				ja: "自分の手札をすべて山札にもどし、山札を切る。その後、山札を6枚引く。"
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
	retreat: 1
}

export default card
