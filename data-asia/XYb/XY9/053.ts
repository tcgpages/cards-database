import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "コノハナ"
	},
	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: [
		"Darkness"
	],
	stage: "Stage1",
	dexId: [
		274
	],
	description: {
		ja: "森の 奥深くに 生息。 頭の 葉っぱで 笛を 作り 不安に させる 音色を 出す。"
	},
	attacks: [
		{
			name: {
				ja: "どつく"
			},
			cost: [
				"Darkness"
			],
			damage: 20
		},
		{
			name: {
				ja: "かまいたち"
			},
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 40
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
	retreat: 1,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
